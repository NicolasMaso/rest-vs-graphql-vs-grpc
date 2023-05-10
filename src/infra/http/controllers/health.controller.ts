import { Controller, Get } from '@nestjs/common'
import { Can } from '../configs/can.decorator'

@Controller('health')
export class HealthController {
  @Get()
  @Can()
  async handler(): Promise<any> {
    return {
      message: `DGC Example running in environment ${process.env.ENV_MODE}`
    }
  }
}