import { GraphqlDeleteMovieResolver } from './../core/adapter/controllers/movies/graphql/delete-movie.resolver.js';
import { GraphqlEditMovieResolver } from './../core/adapter/controllers/movies/graphql/edit-movie.resolver.js';
import { GraphqlAddMovieResolver } from './../core/adapter/controllers/movies/graphql/add-movie.resolver.js';
import { RestDeleteMovieController } from './../core/adapter/controllers/movies/rest/delete-movie.controller.js';
import { RestEditMovieController } from './../core/adapter/controllers/movies/rest/edit-movie.controller.js';
import { RestAddMovieController } from './../core/adapter/controllers/movies/rest/add-movie.controller.js';
import { GraphqlListMoviesResolver } from './../core/adapter/controllers/movies/graphql/list-movies.resolver.js';
import { RestListMoviesController } from './../core/adapter/controllers/movies/rest/list-movies.controller.js';
import { DatabaseModule } from './../core/infra/database/database.module.js';
import { Module } from '@nestjs/common'
import { AddMovie } from './../core/application/usecase/movies/add-movie.js';
import { EditMovie } from './../core/application/usecase/movies/edit-movie.js';
import { DeleteMovie } from './../core/application/usecase/movies/delete-movie.js';
import { ListMovies } from './../core/application/usecase/movies/list-movies.js';


@Module({
  imports: [DatabaseModule],
  controllers: [RestListMoviesController, RestAddMovieController, RestEditMovieController, RestDeleteMovieController],
  providers: [
    AddMovie,
    EditMovie,
    DeleteMovie,
    ListMovies,
    GraphqlListMoviesResolver,
    GraphqlAddMovieResolver,
    GraphqlEditMovieResolver,
    GraphqlDeleteMovieResolver
  ],
})
export class MoviesModule {}
