import { Controller, Get } from '@nestjs/common'

@Controller('health')
export class HealthController {
  @Get()
  async handler(): Promise<any> {
    return {
      message: `DGC Example running in environment ${process.env.ENV_MODE}`
    }
  }
}