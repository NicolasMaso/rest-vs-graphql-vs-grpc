import { Injectable, Inject } from '@nestjs/common'
import { MoviesRepository } from '../../repository/movies.repository.js'
import { MovieInput } from '../../../dto/movies.dto.js'
import { Movie } from '../../../domain/entity/movie.js'

@Injectable()
export class EditMovie {
  constructor(
    @Inject('MoviesRepository')
    private moviesRepository: MoviesRepository
  ) {}

  async execute(movie_id: number, movie_input: MovieInput): Promise<Movie> {
    const movie = await this.moviesRepository.findById(movie_id)
    movie.data = movie_input
    return this.moviesRepository.edit(movie)
  }
}
