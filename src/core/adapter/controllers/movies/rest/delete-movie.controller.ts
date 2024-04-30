import { DeleteMovie } from '../../../../application/usecase/movies/delete-movie.js';
import { Controller, Delete, HttpStatus, Param, ParseIntPipe, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';


@ApiTags('Movies')
@Controller('movies')
export class RestDeleteMovieController {
  constructor(
    private readonly deleteMovie: DeleteMovie
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Delete('/:id')
  async handle(@Res() res: Response, @Param('id', ParseIntPipe) movie_id: number): Promise<Response> {
    const result = await this.deleteMovie.execute(movie_id)
    return res.status(HttpStatus.OK).json(result);
  }
}
