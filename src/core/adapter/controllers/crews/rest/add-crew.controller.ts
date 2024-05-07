import { AddCrew } from '../../../../application/usecase/crews/add-crew.js';
import { Body, Controller, HttpStatus, Post, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';
import { CrewInput } from '../../../../dto/crews.dto.js';


@ApiTags('Crews')
@Controller('crews')
export class RestAddCrewController {
  constructor(
    private readonly addCrew: AddCrew
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Post()
  async handle(@Res() res: Response, @Body() crew_input: CrewInput): Promise<Response> {
    const result = await this.addCrew.execute(crew_input)
    return res.status(HttpStatus.CREATED).json(result);
  }
}
