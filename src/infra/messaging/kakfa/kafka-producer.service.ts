import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import ddLogger from '../../../infra/log/winstonLog'

@Injectable()
export class KafkaProducerService {
  constructor(
    @Inject('KAFKA_PRODUCER') private readonly kafkaProducer: ClientKafka
  ) {}

  produce({ topic, data }: { topic: string, data: any}) {
    try {
      this.kafkaProducer.emit(topic, JSON.stringify(data))
    } catch (error) {
      ddLogger.log(error)
    }
  }
}
