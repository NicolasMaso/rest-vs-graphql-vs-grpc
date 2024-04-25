
export abstract class MoviesRepository {
  abstract findAll(): Promise<any>;
}
