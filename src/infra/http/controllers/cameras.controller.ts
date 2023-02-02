import { Controller, Get, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Camera } from '../../../infra/database/mongoose/schemas/camera.schema'
import { GetCameras } from '../../../domain/usecase/get-cameras'
import { Can } from '../configs/can.decorator'

@ApiTags('Cameras')
@Controller('cameras')
export class CamerasHTTPController {
  constructor(private getCameras: GetCameras) {}

  @ApiOkResponse({
    description: 'OK',
    type: [Camera],
  })
  @Version('1')
  @Get()
  @Can('listAllCameras')
  async getAllCameras(): Promise<Camera[]> {
    return this.getCameras.execute()
  }
}