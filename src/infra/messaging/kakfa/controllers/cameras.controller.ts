import { Controller } from '@nestjs/common'
import { EventPattern, Payload } from '@nestjs/microservices'
import { GetCameras } from 'src/domain/usecase/get-cameras'

@Controller()
export class CamerasMessagingController {
  constructor(private getCameras: GetCameras) {}

  @EventPattern('cameras.add-camera')
  async handleAddCamera(
    @Payload() data: any,
  ) {
    console.log(data)
    const cameras = await this.getCameras.execute()
    console.log(cameras)
  }

  // @EventPattern('cameras.change-camera')
  // async handleChangeCamera(
  //   @Payload() data: any,
  // ) {
  //   console.log(data)
  // }
}
