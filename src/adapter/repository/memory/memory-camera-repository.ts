import { CamerasRepository } from '../../../domain/repository/cameras-repository'

export class MemoryCamerasRepository implements CamerasRepository {
  private cameras = [{
    name: 'Test'
  }]

  async findAll(): Promise<any> {
    return this.cameras
  }
}