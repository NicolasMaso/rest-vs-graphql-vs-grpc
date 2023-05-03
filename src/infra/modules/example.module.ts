import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { examplesProviders, MongooseExamplesRepository } from '../../adapter/repository/database/mongoose-examples.repository'
import { ExamplesHTTPController } from '../http/controllers/example.controller'
import { AddExample } from '../../domain/usecase/add-example'
import { ExamplesMessagingController } from '../messaging/kakfa/controllers/example.controller'
import { KafkaProducerService } from '../messaging/kakfa/kafka-producer.service'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { kafkaConfig } from '../messaging/kakfa/kafka.client'

@Module({
  imports: [
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'KAFKA_PRODUCER',
        transport: Transport.KAFKA,
        options: {
          client: kafkaConfig,
          producerOnlyMode: true,
          consumer: {
            groupId: 'dgc-examples-consumer',
          },
          producer: {
            retry: {
              retries: 1,
              initialRetryTime: 5000,
              restartOnFailure: (e) => Promise.resolve(true)
            }
          }
        },
      },
    ]),
  ],
  controllers: [ExamplesHTTPController, ExamplesMessagingController],
  providers: [
    KafkaProducerService,
    MongooseExamplesRepository,
    ...examplesProviders,
    {
      provide: 'ExamplesRepository',
      useExisting: MongooseExamplesRepository
    },
    AddExample,
  ],
})
export class ExampleModule {}
