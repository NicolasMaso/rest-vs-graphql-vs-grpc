import { ListMovies } from './../../../../application/usecase/movies/list-movies.js';
import { Controller, Get, HttpStatus, ParseIntPipe, Query, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';

@ApiTags('Movies')
@Controller('movies')
export class RestListMoviesController {
  constructor(
    private readonly listMovies: ListMovies
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Get()
  async handle(@Res() res: Response, @Query('limit', ParseIntPipe) limit: number): Promise<Response> {
    const result = await this.listMovies.execute(limit)
    return res.status(HttpStatus.OK).json(result);
  }
}
