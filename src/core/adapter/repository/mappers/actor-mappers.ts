import { Actor } from "../../../domain/entity/actor.js"
import { ActorsModel } from "../../../infra/database/mongoose/schemas/actors.schema.js"

export class ActorMappers {
  static toMongo(actor: Actor): ActorsModel {
    return {
      _id: actor.id,
      id: actor.data.movie_id,
      name: actor.data.name
    }
  }

  static toDomain(raw: ActorsModel): Actor {
    return new Actor({
      _id: raw._id,
      movie_id: raw.id,
      name: raw.name
    })
  }
}
