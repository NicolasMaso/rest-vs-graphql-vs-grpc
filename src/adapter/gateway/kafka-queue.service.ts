import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common'
import { ClientKafka, ServerKafka } from '@nestjs/microservices'
import { QueueGateway } from '../../domain/gateway/queue.gateway'
import { kafkaConfig } from '../../infra/messaging/kakfa/kafka.client'
import ddLogger from '../../infra/log/winstonLog'

@Injectable()
export class KafkaQueueService
  extends ServerKafka
  implements QueueGateway, OnModuleDestroy {
  constructor(
    @Inject('KAFKA_PRODUCER')
    private readonly kafkaProducer: ClientKafka
  ) {
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

  produce({ topic, data }: { topic: string; data: any; }): void {
    try {
      this.kafkaProducer.emit(topic, JSON.stringify(data))
    } catch (error) {
      ddLogger.log(error)
    }
  }
}
