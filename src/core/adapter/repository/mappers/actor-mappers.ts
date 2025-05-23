import { Actor } from "../../../domain/entity/actor.js"
import { ActorsModel } from "../../../infra/database/mongoose/schemas/actors.schema.js"

export class ActorMappers {
  static toMongo(actor: Actor): any {
    return {
      id: actor.data.movie_id,
      name: actor.data.name
    }
  }

  static toDomain(raw: ActorsModel): Actor {
    return new Actor({
      movie_id: raw.id,
      name: raw.name
    })
  }
}
