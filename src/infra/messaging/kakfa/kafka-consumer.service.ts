import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { ServerKafka } from '@nestjs/microservices'
import { kafkaConfig } from './kafka.client'

@Injectable()
export class KafkaConsumerervice
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: kafkaConfig,
      consumer: {
        groupId: 'dgc-examples-consumer',
        retry: {
          retries: 1,
          initialRetryTime: 5000,
          restartOnFailure: (e) => Promise.resolve(true),
        }
      },
    })
  }
  async onModuleDestroy() {
    await this.close()
  }
}
