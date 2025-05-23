import { Movie } from "../../../../core/domain/entity/movie.js"
import { MoviesModel } from "../../../../core/infra/database/mongoose/schemas/movies.schema.js"

export class MovieMappers {
  static toMongo(movie: Movie): MoviesModel {
    return {
      id: movie.data.id,
      name: movie.data.name,
      date: movie.data.date,
      tagline: movie.data.tagline,
      description: movie.data.description,
      minute: movie.data.minute,
      rating: movie.data.rating
    }
  }

  static toDomain(raw: MoviesModel): Movie {
    return new Movie({
      id: raw.id,
      name: raw.name,
      date: raw.date,
      tagline: raw.tagline,
      description: raw.description,
      minute: raw.minute,
      rating: raw.rating
    })
  }
}
