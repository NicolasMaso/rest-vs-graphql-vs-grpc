import { Injectable, Inject } from '@nestjs/common'
import { CrewsRepository } from '../../repository/crews.repository.js'

@Injectable()
export class DeleteCrew {
  constructor(
    @Inject('CrewsRepository')
    private crewsRepository: CrewsRepository
  ) {}

  async execute(crew_id: string): Promise<String> {
    return this.crewsRepository.delete(crew_id)
  }
}
