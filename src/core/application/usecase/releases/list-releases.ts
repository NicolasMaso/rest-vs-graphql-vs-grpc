import { Injectable, Inject } from '@nestjs/common'
import { ReleasesRepository } from '../../repository/releases.repository.js'
import { Release } from '../../../domain/entity/release.js'

@Injectable()
export class ListReleases {
  constructor(
    @Inject('ReleasesRepository')
    private releasesRepository: ReleasesRepository
  ) {}

  async execute(limit: number): Promise<Release[]> {
    return this.releasesRepository.find(limit)
  }
}
