import { AddMovie } from './../../../../application/usecase/movies/add-movie.js';
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { MovieInput, MovieOutput } from '../../../../dto/movies.dto.js';

@Resolver(() => Object)
export class GraphqlAddMovieResolver {
  constructor(private readonly addMovie: AddMovie) {}

  @Mutation(() => MovieOutput, { name: 'add_movie' })
  async handle(
    @Args('movie_input') movie_input: MovieInput
  ) {
    try {
      return this.addMovie.execute(movie_input)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
