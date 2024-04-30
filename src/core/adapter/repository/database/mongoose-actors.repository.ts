import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { ActorsModel } from '../../../infra/database/mongoose/schemas/actors.schema.js'
import { ActorsRepository } from '../../../../core/application/repository/actors.repository.js'
import { InjectModel } from '@nestjs/mongoose'


@Injectable()
export class MongooseActorsRepository implements ActorsRepository {
  constructor(
    @InjectModel(ActorsModel.name) private readonly actorsModel: Model<ActorsModel>,
  ) {}

  async findAll(): Promise<ActorsModel[]> {
    return this.actorsModel.find().exec()
  }
}
