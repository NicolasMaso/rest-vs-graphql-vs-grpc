import { AddRelease } from '../../../../application/usecase/releases/add-release.js';
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { ReleaseInput, ReleaseOutput } from '../../../../dto/releases.dto.js';

@Resolver(() => Object)
export class GraphqlAddReleaseResolver {
  constructor(private readonly addRelease: AddRelease) {}

  @Mutation(() => ReleaseOutput, { name: 'add_release' })
  async handle(
    @Args('release_input') release_input: ReleaseInput
  ) {
    try {
      return this.addRelease.execute(release_input)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
