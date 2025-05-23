import { INestApplication, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './modules/app.module.js'
import { grpcClientOptions } from './core/infra/grpc/grpc-client.options.js'
import { MicroserviceOptions } from '@nestjs/microservices'

async function bootstrap() {
  const port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
    cors: { origin: '*', allowedHeaders: '*' },
  })
  await setupMicroservices(app)
  await setupSwagger(app)
  await app.listen(port, () => {
    console.log(`Serviço executando na porta ${port}`)
  })
}

bootstrap()

async function setupMicroservices(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe())
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions)
  await app.startAllMicroservices()
}

async function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('TCC Nicolas - REST vs GraphQL vs gRPC')
    .setDescription('API para realizar um comparativo entre os padrões REST, GraphQL e gRPC para desenvolvimento de APIs referente ao trabalho de conclusão de curso')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)
}
