import { Module } from '@nestjs/common'
import { ExampleModule } from '../modules/example.module'
import { KafkaConsumerervice } from './kakfa/kafka-consumer.service'

@Module({
  imports: [ExampleModule],
  providers: [KafkaConsumerervice],
})
export class MessagingModule {}
