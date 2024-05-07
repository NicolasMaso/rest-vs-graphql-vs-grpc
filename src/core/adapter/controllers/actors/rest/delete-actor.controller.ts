import { DeleteActor } from '../../../../application/usecase/actors/delete-actor.js';
import { Controller, Delete, HttpStatus, Param, ParseIntPipe, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';


@ApiTags('Actors')
@Controller('actors')
export class RestDeleteActorController {
  constructor(
    private readonly deleteActor: DeleteActor
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Delete('/:id')
  async handle(@Res() res: Response, @Param('id') actor_id: string): Promise<Response> {
    const result = await this.deleteActor.execute(actor_id)
    return res.status(HttpStatus.OK).json(result);
  }
}
