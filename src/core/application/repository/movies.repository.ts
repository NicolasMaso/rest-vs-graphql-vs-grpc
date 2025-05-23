import { Movie } from "../../../core/domain/entity/movie.js";

export abstract class MoviesRepository {
  abstract create(movie: Movie): Promise<Movie>;
  abstract edit(movie: Movie): Promise<Movie>;
  abstract delete(movie_id: number): Promise<String>;
  abstract find(limit: number): Promise<Movie[]>;
  abstract findById(movie_id: number): Promise<Movie>;
}
