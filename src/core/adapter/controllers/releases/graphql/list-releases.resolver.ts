import { ListReleases } from '../../../../application/usecase/releases/list-releases.js';
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'
import { ListReleasesOutput, ReleaseOutput } from '../../../../dto/releases.dto.js';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Object)
export class GraphqlListReleasesResolver {
  constructor(private readonly listReleases: ListReleases) {}

  @Query(() => [ReleaseOutput], { name: 'list_releases', nullable: true })
  async handle(
    @Args('limit', ParseIntPipe) limit: number
  ) {
    try {
      return this.listReleases.execute(limit)
    } catch (error) {
      throw new GraphQLError('Erro desconhecido', {
        extensions: {
          code: 500
        }
      })
    }
  }
}
