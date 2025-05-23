import { ParseIntPipe } from '@nestjs/common';
import { DeleteCrew } from '../../../../application/usecase/crews/delete-crew.js';
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'

@Resolver(() => Object)
export class GraphqlDeleteCrewResolver {
  constructor(private readonly deleteCrew: DeleteCrew) {}

  @Query(() => String, { name: 'delete_crew' })
  async handle(
    @Args('crew_id') crew_id: string
  ) {
    try {
      return this.deleteCrew.execute(crew_id)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
