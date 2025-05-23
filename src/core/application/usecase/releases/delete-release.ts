import { Injectable, Inject } from '@nestjs/common'
import { ReleasesRepository } from '../../repository/releases.repository.js'

@Injectable()
export class DeleteRelease {
  constructor(
    @Inject('ReleasesRepository')
    private releasesRepository: ReleasesRepository
  ) {}

  async execute(release_id: string): Promise<String> {
    return this.releasesRepository.delete(release_id)
  }
}
