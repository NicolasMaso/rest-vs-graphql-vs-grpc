import { ListActors } from '../../../../application/usecase/actors/list-actors.js';
import { Controller, Get, HttpStatus, ParseIntPipe, Query, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';


@ApiTags('Actors')
@Controller('actors')
export class RestListActorsController {
  constructor(
    private readonly listActors: ListActors
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Get()
  async handle(@Res() res: Response, @Query('limit', ParseIntPipe) limit: number): Promise<Response> {
    const result = await this.listActors.execute(limit)
    return res.status(HttpStatus.OK).json(result);
  }
}
