import { EditRelease } from '../../../../application/usecase/releases/edit-release.js';
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { ReleaseOutput, ReleaseInput } from '../../../../dto/releases.dto.js';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Object)
export class GraphqlEditReleaseResolver {
  constructor(private readonly editRelease: EditRelease) {}

  @Mutation(() => ReleaseOutput, { name: 'edit_release' })
  async handle(
    @Args('release_id') release_id: string,
    @Args('release_input') release_input: ReleaseInput
  ) {
    try {
      return this.editRelease.execute(release_id, release_input)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
