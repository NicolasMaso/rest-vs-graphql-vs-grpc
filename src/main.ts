import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { MicroserviceOptions } from '@nestjs/microservices'
import { KafkaQueueService } from './adapter/gateway/kafka-queue.service'
import { ExampleModule } from './infra/modules/example.module'

async function bootstrap() {
  const port = process.env.PORT || 4220
  const app = await NestFactory.create(ExampleModule, {
    logger: ['error', 'warn'],
    cors: { origin: '*', allowedHeaders: '*' },
  })
  app.enableVersioning({ type: VersioningType.URI })
  await setupMicroservices(app)
  await setupSwagger(app)
  await app.listen(port, () => {
    console.log(`Server listening on port ${port} in env ${process.env.ENV_MODE}`)
  })
}
bootstrap()

async function setupMicroservices(app: INestApplication) {
  const kafkaConsumerService = app.get(KafkaQueueService)
  app.useGlobalPipes(new ValidationPipe())
  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumerService,
  })
  await app.startAllMicroservices()
}

async function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('DGC Example')
    .setDescription('Serviço responsável pelo ________ do Dguardcloud')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)
}
