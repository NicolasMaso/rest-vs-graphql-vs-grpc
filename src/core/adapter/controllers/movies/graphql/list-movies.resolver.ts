import { ListMovies } from './../../../../application/usecase/movies/list-movies';
import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'

@ObjectType({ description: '' })
class Test {
  @Field((type) => String, { description: '' })
  name: string
}

@Resolver(() => Object)
export class GraphqlListMoviesResolver {
  constructor(private readonly listMovies: ListMovies) {}

  @Query(() => Test, { name: 'list_movies', nullable: true })
  async handle() {
    const result = await this.listMovies.execute()
    if (!result.ok) {
      throw new GraphQLError(result.reason, {
        extensions: {
          code: result.code
        }
      })
    }
    return result
  }
}
