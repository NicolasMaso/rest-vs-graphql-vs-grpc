import { GraphqlListMoviesResolver } from './../core/adapter/controllers/movies/graphql/list-movies.resolver';
import { ListMovies } from './../core/application/usecase/movies/list-movies';
import { RestListMoviesController } from './../core/adapter/controllers/movies/rest/list-movies.controller';
import { DatabaseModule } from './../core/infra/database/database.module';
import { Module } from '@nestjs/common'

@Module({
  imports: [DatabaseModule],
  controllers: [RestListMoviesController],
  providers: [
    ListMovies,
    GraphqlListMoviesResolver
  ],
})
export class MoviesModule {}
