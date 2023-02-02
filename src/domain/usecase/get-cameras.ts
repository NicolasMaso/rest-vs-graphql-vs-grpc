import { Injectable, Inject } from '@nestjs/common'
import { CamerasRepository } from '../repository/cameras-repository'

@Injectable()
export class GetCameras {
  constructor(
    @Inject('CamerasRepository')
    private camerasRepository: CamerasRepository
  ) {}

  async execute() {
    return this.camerasRepository.findAll()
  }
}