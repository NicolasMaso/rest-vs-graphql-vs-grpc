import { Injectable, Inject } from '@nestjs/common'
import { MoviesRepository } from '../../repository/movies.repository'

@Injectable()
export class ListMovies {
  constructor(
    @Inject('MoviesRepository')
    private moviesRepository: MoviesRepository
  ) {}

  async execute() {
    return this.moviesRepository.findAll()
  }
}
