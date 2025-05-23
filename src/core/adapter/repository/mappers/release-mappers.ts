import { Release } from "../../../domain/entity/release.js"
import { ReleasesModel } from "../../../infra/database/mongoose/schemas/releases.schema.js"

export class ReleaseMappers {
  static toMongo(release: Release): any {
    return {
      id: release.data.movie_id,
      country: release.data.country,
      date: release.data.date,
      type: release.data.type,
      rating: release.data.rating
    }
  }

  static toDomain(raw: ReleasesModel): Release {
    return new Release({
      movie_id: raw.id,
      country: raw.country,
      date: raw.date,
      type: raw.type,
      rating: raw.rating
    })
  }
}
