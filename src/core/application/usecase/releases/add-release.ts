import { Injectable, Inject } from '@nestjs/common'
import { ReleasesRepository } from '../../repository/releases.repository.js'
import { ReleaseInput } from '../../../dto/releases.dto.js'
import { Release } from '../../../domain/entity/release.js'

@Injectable()
export class AddRelease {
  constructor(
    @Inject('ReleasesRepository')
    private releasesRepository: ReleasesRepository
  ) {}

  async execute(release_input: ReleaseInput): Promise<Release> {
    const release = new Release(release_input)
    const result = await this.releasesRepository.create(release)
    return result
  }
}
