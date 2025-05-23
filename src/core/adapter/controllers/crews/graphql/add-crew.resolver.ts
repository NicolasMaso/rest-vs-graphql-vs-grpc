import { AddCrew } from '../../../../application/usecase/crews/add-crew.js';
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { CrewInput, CrewOutput } from '../../../../dto/crews.dto.js';

@Resolver(() => Object)
export class GraphqlAddCrewResolver {
  constructor(private readonly addCrew: AddCrew) {}

  @Mutation(() => CrewOutput, { name: 'add_crew' })
  async handle(
    @Args('crew_input') crew_input: CrewInput
  ) {
    try {
      return this.addCrew.execute(crew_input)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
