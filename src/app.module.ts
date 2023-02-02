import { Module } from '@nestjs/common'
import { HttpModule } from './infra/http/http.module'
import { MessagingModule } from './infra/messaging/messaging.module'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    HttpModule,
    MessagingModule
  ],
})
export class AppModule {}
