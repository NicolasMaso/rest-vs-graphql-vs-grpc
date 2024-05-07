import { AddActor } from '../../../../application/usecase/actors/add-actor.js';
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { ActorInput, ActorOutput } from '../../../../dto/actors.dto.js';

@Resolver(() => Object)
export class GraphqlAddActorResolver {
  constructor(private readonly addActor: AddActor) {}

  @Mutation(() => ActorOutput, { name: 'add_actor' })
  async handle(
    @Args('actor_input') actor_input: ActorInput
  ) {
    try {
      return this.addActor.execute(actor_input)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
