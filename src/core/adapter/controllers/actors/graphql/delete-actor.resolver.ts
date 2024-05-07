import { ParseIntPipe } from '@nestjs/common';
import { DeleteActor } from '../../../../application/usecase/actors/delete-actor.js';
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'

@Resolver(() => Object)
export class GraphqlDeleteActorResolver {
  constructor(private readonly deleteActor: DeleteActor) {}

  @Query(() => String, { name: 'delete_actor' })
  async handle(
    @Args('actor_id') actor_id: string
  ) {
    try {
      return this.deleteActor.execute(actor_id)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
