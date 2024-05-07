import { EditCrew } from '../../../../application/usecase/crews/edit-crew.js';
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { CrewOutput, CrewInput } from '../../../../dto/crews.dto.js';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Object)
export class GraphqlEditCrewResolver {
  constructor(private readonly editCrew: EditCrew) {}

  @Mutation(() => CrewOutput, { name: 'edit_crew' })
  async handle(
    @Args('crew_id') crew_id: string,
    @Args('crew_input') crew_input: CrewInput
  ) {
    try {
      return this.editCrew.execute(crew_id, crew_input)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
