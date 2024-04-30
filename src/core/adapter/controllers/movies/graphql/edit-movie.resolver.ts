import { EditMovie } from './../../../../application/usecase/movies/edit-movie.js';
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { MovieOutput, MovieInput } from '../../../../dto/movies.dto.js';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Object)
export class GraphqlEditMovieResolver {
  constructor(private readonly editMovie: EditMovie) {}

  @Mutation(() => MovieOutput, { name: 'edit_movie' })
  async handle(
    @Args('movie_id', ParseIntPipe) movie_id: number,
    @Args('movie_input') movie_input: MovieInput
  ) {
    try {
      return this.editMovie.execute(movie_id, movie_input)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
