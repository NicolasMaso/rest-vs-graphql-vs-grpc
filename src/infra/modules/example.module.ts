import { CacheModule, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ScheduleModule } from '@nestjs/schedule'
import { redisStore } from 'cache-manager-redis-yet'
import { join } from 'path'
import { DatabaseModule } from '../database/database.module'
import { RedisCacheService } from '../../adapter/gateway/redis-cache.service'
import { examplesProviders, MongooseExamplesRepository } from '../../adapter/repository/database/mongoose-examples.repository'
import { ExamplesHTTPController } from '../http/controllers/example.controller'
import { AddExample } from '../../domain/usecase/add-example'
import { ExamplesMessagingController } from '../messaging/kakfa/controllers/example.controller'
import { HttpModule } from '../http/http.module'
import { MessagingModule } from '../messaging/messaging.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    DatabaseModule,
    HttpModule,
    MessagingModule,
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: await redisStore({
          url: process.env.REDIS_CACHE || '',
        }),
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'coverage', 'lcov-report'),
      renderPath: '/tests'
    }),
  ],
  controllers: [ExamplesHTTPController, ExamplesMessagingController],
  providers: [
    RedisCacheService,
    {
      provide: 'CacheGateway',
      useExisting: RedisCacheService,
    },
    MongooseExamplesRepository,
    ...examplesProviders,
    {
      provide: 'ExamplesRepository',
      useExisting: MongooseExamplesRepository
    },
    AddExample,
  ],
})
export class ExampleModule {}
