import { ListMovies } from './../../../../application/usecase/movies/list-movies.js';
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { Movie } from '../../../../dto/movies.dto.js';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Object)
export class GraphqlListMoviesResolver {
  constructor(private readonly listMovies: ListMovies) {}

  @Query(() => [Movie], { name: 'list_movies', nullable: true })
  async handle(
    @Args('limit', ParseIntPipe) limit: number
  ) {
    try {
      return this.listMovies.execute(limit)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
