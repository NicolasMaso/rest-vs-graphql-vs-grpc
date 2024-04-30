import { Injectable, Inject } from '@nestjs/common'
import { MoviesRepository } from '../../repository/movies.repository.js'
import { MovieInput } from '../../../../core/dto/movies.dto.js'
import { Movie } from '../../../../core/domain/entity/movie.js'

@Injectable()
export class AddMovie {
  constructor(
    @Inject('MoviesRepository')
    private moviesRepository: MoviesRepository
  ) {}

  async execute(movie_input: MovieInput): Promise<Movie> {
    const movie = Movie.create(movie_input)
    console.log('🚀 ~ AddMovie ~ execute ~ movie:', movie)
    const result = await this.moviesRepository.create(movie)
    return result
  }
}
