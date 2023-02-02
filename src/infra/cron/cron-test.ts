import { Injectable } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'

@Injectable()
export class TasksService {
  @Cron(CronExpression.EVERY_30_SECONDS, {
    name: 'Test',
    timeZone: 'America/Sao_Paulo'
  })
  handleCron() {
    console.log('Called every 30 seconds')
  }
}