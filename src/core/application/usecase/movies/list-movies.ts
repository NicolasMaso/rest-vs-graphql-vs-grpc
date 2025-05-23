import { Injectable, Inject } from '@nestjs/common'
import { MoviesRepository } from '../../repository/movies.repository.js'
import { Movie } from '../../../../core/domain/entity/movie.js'

@Injectable()
export class ListMovies {
  constructor(
    @Inject('MoviesRepository')
    private moviesRepository: MoviesRepository
  ) {}

  async execute(limit: number): Promise<Movie[]> {
    return this.moviesRepository.find(limit)
  }
}
