import { Injectable, Inject } from '@nestjs/common'
import { MoviesRepository } from '../../repository/movies.repository.js'

@Injectable()
export class DeleteMovie {
  constructor(
    @Inject('MoviesRepository')
    private moviesRepository: MoviesRepository
  ) {}

  async execute(movie_id: number): Promise<String> {
    return this.moviesRepository.delete(movie_id)
  }
}
