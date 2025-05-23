import { DeleteCrew } from '../../../../application/usecase/crews/delete-crew.js';
import { Controller, Delete, HttpStatus, Param, ParseIntPipe, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';


@ApiTags('Crews')
@Controller('crews')
export class RestDeleteCrewController {
  constructor(
    private readonly deleteCrew: DeleteCrew
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Delete('/:id')
  async handle(@Res() res: Response, @Param('id') crew_id: string): Promise<Response> {
    const result = await this.deleteCrew.execute(crew_id)
    return res.status(HttpStatus.OK).json(result);
  }
}
