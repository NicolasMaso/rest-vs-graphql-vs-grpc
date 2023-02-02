import { Model, Connection } from 'mongoose'
import { Injectable, Inject } from '@nestjs/common'
import { Camera, CameraSchema } from '../../../infra/database/mongoose/schemas/camera.schema'
import { CamerasRepository } from '../../../domain/repository/cameras-repository'

export const camerasProviders = [
  {
    provide: 'Camera_MODEL',
    useFactory: (connection: Connection) => connection.model('Camera', CameraSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]

@Injectable()
export class MongooseCamerasRepository implements CamerasRepository {
  constructor(
    @Inject('Camera_MODEL')
    private cameraModel: Model<Camera>,
  ) {}

  async findAll(): Promise<Camera[]> {
    return this.cameraModel.find().exec()
  }
}