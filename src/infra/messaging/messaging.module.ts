import { Module } from '@nestjs/common'
import { ExampleModule } from '../modules/example.module'
import { KafkaConsumerService } from './kakfa/kafka-consumer.service'

@Module({
  imports: [ExampleModule],
  providers: [KafkaConsumerService],
})
export class MessagingModule {}
