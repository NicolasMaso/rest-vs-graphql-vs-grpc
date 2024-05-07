import { AddMovie } from './../../../../application/usecase/movies/add-movie.js';
import { Body, Controller, HttpStatus, Post, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';
import { MovieInput } from '../../../../../core/dto/movies.dto.js';


@ApiTags('Movies')
@Controller('movies')
export class RestAddMovieController {
  constructor(
    private readonly addMovie: AddMovie
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Post()
  async handle(@Res() res: Response, @Body() movie_input: MovieInput): Promise<Response> {
    const result = await this.addMovie.execute(movie_input)
    return res.status(HttpStatus.CREATED).json(result);
  }
}
