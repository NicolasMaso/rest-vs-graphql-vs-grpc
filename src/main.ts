import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { KafkaConsumerService } from './infra/messaging/kakfa/kafka-consumer.service'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const port = process.env.PORT || 7000
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
    cors: { origin: '*', allowedHeaders: '*' },
  })
  app.enableVersioning({ type: VersioningType.URI })
  await setupQueue(app)
  await setupSwagger(app)
  await app.listen(port, () => {
    console.log(`Server listening on port ${port} in env ${process.env.ENV_MODE}`)
  })
}
bootstrap()

async function setupQueue(app: INestApplication) {
  const kafkaConsumerService = app.get(KafkaConsumerService)
  app.useGlobalPipes(new ValidationPipe())
  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumerService,
  })
  await app.startAllMicroservices()
}

async function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('DGC Example')
    .setDescription('Servi‡o respons vel pelo ________ do Dguardcloud')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)
}