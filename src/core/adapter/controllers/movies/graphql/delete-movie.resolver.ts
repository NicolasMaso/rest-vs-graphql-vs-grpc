import { ParseIntPipe } from '@nestjs/common';
import { DeleteMovie } from './../../../../application/usecase/movies/delete-movie.js';
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'

@Resolver(() => Object)
export class GraphqlDeleteMovieResolver {
  constructor(private readonly deleteMovie: DeleteMovie) {}

  @Mutation(() => String, { name: 'delete_movie' })
  async handle(
    @Args('movie_id', ParseIntPipe) movie_id: number
  ) {
    try {
      return this.deleteMovie.execute(movie_id)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
