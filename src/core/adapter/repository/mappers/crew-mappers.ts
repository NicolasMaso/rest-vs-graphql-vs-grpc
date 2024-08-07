import { Crew } from "../../../domain/entity/crew.js"
import { CrewsModel } from "../../../infra/database/mongoose/schemas/crews.schema.js"

export class CrewMappers {
  static toMongo(crew: Crew): any {
    return {
      id: crew.data.movie_id,
      role: crew.data.role,
      name: crew.data.name
    }
  }

  static toDomain(raw: CrewsModel): Crew {
    return new Crew({
      movie_id: raw.id,
      role: raw.role,
      name: raw.name
    })
  }
}
