import { AddMovie } from './../../../../application/usecase/movies/add-movie.js';
import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { MovieInput } from '../../../../dto/movies.dto.js';

@Controller()
export class GrpcAddMovieController {
  constructor(private readonly addMovie: AddMovie) {}

  @GrpcMethod('TccService', 'addMovie')
  async handle(
    data: MovieInput
  ): Promise<any> {
    return this.addMovie.execute(data)
  }
}
