import { Injectable, Inject } from '@nestjs/common'
import { CrewsRepository } from '../../repository/crews.repository.js'
import { CrewInput } from '../../../dto/crews.dto.js'
import { Crew } from '../../../domain/entity/crew.js'

@Injectable()
export class EditCrew {
  constructor(
    @Inject('CrewsRepository')
    private crewsRepository: CrewsRepository
  ) {}

  async execute(crew_id: string, crew_input: CrewInput): Promise<Crew> {
    const crew = await this.crewsRepository.findById(crew_id)
    crew.data = crew_input
    return this.crewsRepository.edit(crew)
  }
}
