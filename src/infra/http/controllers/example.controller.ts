import { Controller, Get, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AddExample } from '../../../domain/usecase/add-example'
import { Can } from '../configs/can.decorator'
import { Example } from '../../../domain/entity/example'
import { KafkaProducerService } from '../../../infra/messaging/kakfa/kafka-producer.service'

@ApiTags('Examples')
@Controller('examples')
export class ExamplesHTTPController {
  constructor(
    private readonly kafkaProducerService: KafkaProducerService,
    private readonly addExample: AddExample
  ) {}

  @ApiOkResponse({
    description: 'OK',
    type: [Example],
  })
  @Version('1')
  @Get()
  @Can('listAllExamples')
  async addAllExamples(): Promise<Example[]> {
    return this.addExample.execute()
  }
}
