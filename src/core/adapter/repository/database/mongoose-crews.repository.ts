import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { CrewsModel } from '../../../infra/database/mongoose/schemas/crews.schema'
import { InjectModel } from '@nestjs/mongoose'
import { CrewsRepository } from '../../../../core/application/repository/crews.repository'


@Injectable()
export class MongooseCrewsRepository implements CrewsRepository {
  constructor(
    @InjectModel(CrewsModel.name) private readonly crewsModel: Model<CrewsModel>,
  ) {}

  async findAll(): Promise<CrewsModel[]> {
    return this.crewsModel.find().exec()
  }
}
