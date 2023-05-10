import { Module } from '@nestjs/common'
import { HttpModule } from './infra/http/http.module'
import { MessagingModule } from './infra/messaging/messaging.module'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    HttpModule,
    MessagingModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'coverage', 'lcov-report'),
      renderPath: '/tests'
    }),
  ],
})
export class AppModule {}
