import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { camerasProviders, MongooseCamerasRepository } from '../../adapter/repository/database/mongoose-camera-repository'
import { CamerasHTTPController } from '../http/controllers/cameras.controller'
import { GetCameras } from '../../domain/usecase/get-cameras'
import { CamerasMessagingController } from '../messaging/kakfa/controllers/cameras.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [CamerasHTTPController, CamerasMessagingController],
  providers: [
    MongooseCamerasRepository,
    ...camerasProviders,
    {
      provide: 'CamerasRepository',
      useExisting: MongooseCamerasRepository
    },
    GetCameras,
  ],
})
export class CameraModule {}