import { Module } from '@nestjs/common'
import { CameraModule } from '../modules/camera.module'
import { KafkaConsumerervice } from './kakfa/kafka-consumer.service'

@Module({
  imports: [CameraModule],
  providers: [KafkaConsumerervice],
})
export class MessagingModule {}
