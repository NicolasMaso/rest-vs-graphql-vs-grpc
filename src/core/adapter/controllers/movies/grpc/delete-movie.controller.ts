import { DeleteMovie } from './../../../../application/usecase/movies/delete-movie.js';
import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

@Controller()
export class GrpcDeleteMovieController {
  constructor(private readonly deleteMovie: DeleteMovie) {}

  @GrpcMethod('TccService', 'deleteMovie')
  async handle(
    data: { id: number }
  ): Promise<any> {
    return this.deleteMovie.execute(data.id)
  }
}
