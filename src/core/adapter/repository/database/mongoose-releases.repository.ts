import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { ReleasesModel } from '../../../infra/database/mongoose/schemas/releases.schema'
import { ReleasesRepository } from '../../../../core/application/repository/releases.repository'
import { InjectModel } from '@nestjs/mongoose'


@Injectable()
export class MongooseReleasesRepository implements ReleasesRepository {
  constructor(
    @InjectModel(ReleasesModel.name) private readonly releasesModel: Model<ReleasesModel>,
  ) {}

  async findAll(): Promise<ReleasesModel[]> {
    return this.releasesModel.find().exec()
  }
}
