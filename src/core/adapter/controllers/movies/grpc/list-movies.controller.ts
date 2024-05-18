import { ListMovies } from './../../../../application/usecase/movies/list-movies.js';
import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js'

@Controller()
export class GrpcListMoviesController {
  constructor(private readonly listMovies: ListMovies) {}

  @GrpcMethod('TccService', 'listMovies')
  async handle(
    data: { limit: number },
    metadata: Metadata,
    call: ServerUnaryCall<any, any>
  ): Promise<any> {
    console.log(data)
    const result = await this.listMovies.execute(data.limit)
    return { movies: result }
  }
}
