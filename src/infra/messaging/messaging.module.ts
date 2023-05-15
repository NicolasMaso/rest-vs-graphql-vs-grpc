import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { KafkaQueueService } from '../../adapter/gateway/kafka-queue.service'
import { kafkaConfig } from './kakfa/kafka.client'

@Module({
  imports: [
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
  providers: [
    KafkaQueueService,
    {
      provide: 'QueueGateway',
      useExisting: KafkaQueueService,
    },
  ],
  exports: [KafkaQueueService, 'QueueGateway']
})
export class MessagingModule {}
