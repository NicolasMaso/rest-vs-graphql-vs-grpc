import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { HealthController } from './controllers/health.controller'
import { AuthenticationMiddleware } from './configs/authentication.middleware'
import { PermissionsGuard } from './configs/permissions.guard'

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },
  ],
})
export class HttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude('health')
      .forRoutes('*')
  }
}
