import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { MoviesModel } from '../../../infra/database/mongoose/schemas/movies.schema'
import { MoviesRepository } from '../../../../core/application/repository/movies.repository'
import { InjectModel } from '@nestjs/mongoose'


@Injectable()
export class MongooseMoviesRepository implements MoviesRepository {
  constructor(
    @InjectModel(MoviesModel.name) private readonly moviesModel: Model<MoviesModel>,
  ) {}

  async findAll(): Promise<MoviesModel[]> {
    const movies = await this.moviesModel.find().limit(500000).exec()
    return movies
  }
}
