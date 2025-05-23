import { ListMovies } from './../../../../application/usecase/movies/list-movies.js';
import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

@Controller()
export class GrpcListMoviesController {
  constructor(private readonly listMovies: ListMovies) {}

  @GrpcMethod('TccService', 'listMovies')
  async handle(
    data: { limit: number }
  ): Promise<any> {
    const result = await this.listMovies.execute(Number(data.limit))
    return { movies: result }
  }
}
