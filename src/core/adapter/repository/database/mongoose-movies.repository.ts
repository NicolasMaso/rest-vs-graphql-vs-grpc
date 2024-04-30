import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { MoviesModel } from '../../../infra/database/mongoose/schemas/movies.schema.js'
import { MoviesRepository } from '../../../../core/application/repository/movies.repository.js'
import { InjectModel } from '@nestjs/mongoose'
import { Movie } from 'src/core/domain/entity/movie.js'
import { MovieMappers } from '../mappers/movie-mappers.js'


@Injectable()
export class MongooseMoviesRepository implements MoviesRepository {
  constructor(
    @InjectModel(MoviesModel.name) private readonly moviesModel: Model<MoviesModel>,
  ) {}

  async create(movie: Movie): Promise<Movie> {
    const movieToMongo = MovieMappers.toMongo(movie)
    await this.moviesModel.create(movieToMongo)
    return movie
  }

  async edit(movie: Movie): Promise<Movie> {
    const movieToMongo = MovieMappers.toMongo(movie)
    await this.moviesModel.updateOne({ id: movie.data.id }, movieToMongo)
    return movie
  }
  async delete(movie_id: number): Promise<String> {
    await this.moviesModel.deleteOne({ id: movie_id })
    return 'Filme removido com sucesso.'
  }

  async find(limit: number): Promise<Movie[]> {
    const movies = await this.moviesModel.find().limit(limit).exec()
    return movies.map(movie => MovieMappers.toDomain(movie))
  }

  async findById(movie_id: number): Promise<Movie> {
    const movie = await this.moviesModel.findOne({ id: movie_id })
    return movie ? MovieMappers.toDomain(movie) : null
  }
}
