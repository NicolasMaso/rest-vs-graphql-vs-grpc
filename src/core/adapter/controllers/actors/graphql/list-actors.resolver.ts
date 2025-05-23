import { ListActors } from '../../../../application/usecase/actors/list-actors.js';
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { ListActorsOutput, ActorOutput } from '../../../../dto/actors.dto.js';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Object)
export class GraphqlListActorsResolver {
  constructor(private readonly listActors: ListActors) {}

  @Query(() => [ActorOutput], { name: 'list_actors', nullable: true })
  async handle(
    @Args('limit', ParseIntPipe) limit: number
  ) {
    try {
      return this.listActors.execute(limit)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
