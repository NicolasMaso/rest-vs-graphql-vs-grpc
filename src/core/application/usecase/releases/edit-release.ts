import { Injectable, Inject } from '@nestjs/common'
import { ReleasesRepository } from '../../repository/releases.repository.js'
import { ReleaseInput } from '../../../dto/releases.dto.js'
import { Release } from '../../../domain/entity/release.js'

@Injectable()
export class EditRelease {
  constructor(
    @Inject('ReleasesRepository')
    private releasesRepository: ReleasesRepository
  ) {}

  async execute(release_id: string, release_input: ReleaseInput): Promise<Release> {
    const release = await this.releasesRepository.findById(release_id)
    release.data = release_input
    return this.releasesRepository.edit(release)
  }
}
