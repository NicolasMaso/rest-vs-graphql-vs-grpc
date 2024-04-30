import { EditMovie } from '../../../../application/usecase/movies/edit-movie.js';
import { Body, Controller, HttpStatus, Param, ParseIntPipe, Put, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';
import { MovieInput } from '../../../../../core/dto/movies.dto.js';


@ApiTags('Movies')
@Controller('movies')
export class RestEditMovieController {
  constructor(
    private readonly editMovie: EditMovie
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Put('/:id')
  async handle(@Res() res: Response, @Param('id', ParseIntPipe) movie_id: number, @Body() movie_input: MovieInput): Promise<Response> {
    const result = await this.editMovie.execute(movie_id, movie_input)
    return res.status(HttpStatus.OK).json(result);
  }
}
