import { EditActor } from '../../../../application/usecase/actors/edit-actor.js';
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { ActorOutput, ActorInput } from '../../../../dto/actors.dto.js';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Object)
export class GraphqlEditActorResolver {
  constructor(private readonly editActor: EditActor) {}

  @Mutation(() => ActorOutput, { name: 'edit_actor' })
  async handle(
    @Args('actor_id') actor_id: string,
    @Args('actor_input') actor_input: ActorInput
  ) {
    try {
      return this.editActor.execute(actor_id, actor_input)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
