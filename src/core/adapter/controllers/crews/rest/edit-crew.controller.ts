import { EditCrew } from '../../../../application/usecase/crews/edit-crew.js';
import { Body, Controller, HttpStatus, Param, ParseIntPipe, Put, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';
import { CrewInput } from '../../../../dto/crews.dto.js';


@ApiTags('Crews')
@Controller('crews')
export class RestEditCrewController {
  constructor(
    private readonly editCrew: EditCrew
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Put('/:id')
  async handle(@Res() res: Response, @Param('id') crew_id: string, @Body() crew_input: CrewInput): Promise<Response> {
    const result = await this.editCrew.execute(crew_id, crew_input)
    return res.status(HttpStatus.OK).json(result);
  }
}
