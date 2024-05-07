import { Crew } from './../../../domain/entity/crew.js';
import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { CrewsModel } from '../../../infra/database/mongoose/schemas/crews.schema.js'
import { InjectModel } from '@nestjs/mongoose'
import { CrewsRepository } from '../../../../core/application/repository/crews.repository.js'
import { CrewMappers } from '../mappers/crew-mappers.js';


@Injectable()
export class MongooseCrewsRepository implements CrewsRepository {
  constructor(
    @InjectModel(CrewsModel.name) private readonly crewsModel: Model<CrewsModel>,
  ) {}

  async create(crew: Crew): Promise<Crew> {
    const crewToMongo = CrewMappers.toMongo(crew)
    await this.crewsModel.create(crewToMongo)
    return crew
  }

  async edit(crew: Crew): Promise<Crew> {
    const crewToMongo = CrewMappers.toMongo(crew)
    await this.crewsModel.updateOne({ _id: crew.id }, crewToMongo)
    return crew
  }
  async delete(crew_id: string): Promise<String> {
    await this.crewsModel.deleteOne({ _id: crew_id })
    return 'Equipe do filme removida com sucesso.'
  }

  async find(limit: number): Promise<Crew[]> {
    const crews = await this.crewsModel.find().limit(limit).exec()
    return crews.map(crew => CrewMappers.toDomain(crew))
  }

  async findById(crew_id: string): Promise<Crew> {
    const crew = await this.crewsModel.findOne({ _id: crew_id })
    return crew ? CrewMappers.toDomain(crew) : null
  }
}
