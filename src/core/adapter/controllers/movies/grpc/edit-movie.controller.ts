import { EditMovie } from './../../../../application/usecase/movies/edit-movie.js';
import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { Movie } from '../../../../dto/movies.dto.js';

@Controller()
export class GrpcEditMovieController {
  constructor(private readonly editMovie: EditMovie) {}

  @GrpcMethod('TccService', 'editMovie')
  async handle(
    data: Movie
  ): Promise<any> {
    return this.editMovie.execute(data.id, data)
  }
}
