import { EditActor } from '../../../../application/usecase/actors/edit-actor.js';
import { Body, Controller, HttpStatus, Param, ParseIntPipe, Put, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';
import { ActorInput } from '../../../../dto/actors.dto.js';


@ApiTags('Actors')
@Controller('actors')
export class RestEditActorController {
  constructor(
    private readonly editActor: EditActor
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Put('/:id')
  async handle(@Res() res: Response, @Param('id') actor_id: string, @Body() actor_input: ActorInput): Promise<Response> {
    const result = await this.editActor.execute(actor_id, actor_input)
    return res.status(HttpStatus.OK).json(result);
  }
}
