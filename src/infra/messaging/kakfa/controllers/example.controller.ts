import { Controller } from '@nestjs/common'
import { EventPattern, Payload } from '@nestjs/microservices'
import { AddExample } from '../../../../domain/usecase/add-example'
import { KafkaProducerService } from '../kafka-producer.service'

@Controller()
export class ExamplesMessagingController {
  constructor(
    private readonly kafkaProducerService: KafkaProducerService,
    private readonly addExample: AddExample
  ) {}

  @EventPattern('examples.add-example')
  async handleAddExample(
    @Payload() data: any,
  ) {
    console.log(data)
    // this.kafkaProducerService.produce({topic: '', data})
    const examples = await this.addExample.execute()
    console.log(examples)
  }
}
