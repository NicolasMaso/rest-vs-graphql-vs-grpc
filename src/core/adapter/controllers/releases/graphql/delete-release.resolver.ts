import { ParseIntPipe } from '@nestjs/common';
import { DeleteRelease } from '../../../../application/usecase/releases/delete-release.js';
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'

@Resolver(() => Object)
export class GraphqlDeleteReleaseResolver {
  constructor(private readonly deleteRelease: DeleteRelease) {}

  @Query(() => String, { name: 'delete_release' })
  async handle(
    @Args('release_id') release_id: string
  ) {
    try {
      return this.deleteRelease.execute(release_id)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
