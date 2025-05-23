import { Actor } from './../../../domain/entity/actor.js';
import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { ActorsModel } from '../../../infra/database/mongoose/schemas/actors.schema.js'
import { ActorsRepository } from '../../../../core/application/repository/actors.repository.js'
import { InjectModel } from '@nestjs/mongoose'
import { ActorMappers } from '../mappers/actor-mappers.js'


@Injectable()
export class MongooseActorsRepository implements ActorsRepository {
  constructor(
    @InjectModel(ActorsModel.name) private readonly actorsModel: Model<ActorsModel>,
  ) {}

  async create(actor: Actor): Promise<Actor> {
    const actorToMongo = ActorMappers.toMongo(actor)
    await this.actorsModel.create(actorToMongo)
    return actor
  }

  async edit(actor: Actor): Promise<Actor> {
    const actorToMongo = ActorMappers.toMongo(actor)
    await this.actorsModel.updateOne({ _id: actor.id }, actorToMongo)
    return actor
  }
  async delete(actor_id: string): Promise<String> {
    await this.actorsModel.deleteOne({ _id: actor_id })
    return 'Ator do filme removido com sucesso.'
  }

  async find(limit: number): Promise<Actor[]> {
    const actors = await this.actorsModel.find().limit(limit).exec()
    return actors.map(actor => ActorMappers.toDomain(actor))
  }

  async findById(actor_id: string): Promise<Actor> {
    const actor = await this.actorsModel.findOne({ _id: actor_id })
    return actor ? ActorMappers.toDomain(actor) : null
  }
}
