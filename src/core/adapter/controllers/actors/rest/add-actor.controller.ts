import { AddActor } from '../../../../application/usecase/actors/add-actor.js';
import { Body, Controller, HttpStatus, Post, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';
import { ActorInput } from '../../../../dto/actors.dto.js';


@ApiTags('Actors')
@Controller('actors')
export class RestAddActorController {
  constructor(
    private readonly addActor: AddActor
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Post()
  async handle(@Res() res: Response, @Body() actor_input: ActorInput): Promise<Response> {
    const result = await this.addActor.execute(actor_input)
    return res.status(HttpStatus.CREATED).json(result);
  }
}
