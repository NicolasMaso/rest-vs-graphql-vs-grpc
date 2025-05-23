import { ListCrews } from '../../../../application/usecase/crews/list-crews.js';
import { Controller, Get, HttpStatus, ParseIntPipe, Query, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';


@ApiTags('Crews')
@Controller('crews')
export class RestListCrewsController {
  constructor(
    private readonly listCrews: ListCrews
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Get()
  async handle(@Res() res: Response, @Query('limit', ParseIntPipe) limit: number): Promise<Response> {
    const result = await this.listCrews.execute(limit)
    return res.status(HttpStatus.OK).json(result);
  }
}
