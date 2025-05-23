import { ListCrews } from '../../../../application/usecase/crews/list-crews.js';
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { ListCrewsOutput, CrewOutput } from '../../../../dto/crews.dto.js';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Object)
export class GraphqlListCrewsResolver {
  constructor(private readonly listCrews: ListCrews) {}

  @Query(() => [CrewOutput], { name: 'list_crews', nullable: true })
  async handle(
    @Args('limit', ParseIntPipe) limit: number
  ) {
    try {
      return this.listCrews.execute(limit)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
