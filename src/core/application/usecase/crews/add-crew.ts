import { Injectable, Inject } from '@nestjs/common'
import { CrewsRepository } from '../../repository/crews.repository.js'
import { CrewInput } from '../../../dto/crews.dto.js'
import { Crew } from '../../../domain/entity/crew.js'

@Injectable()
export class AddCrew {
  constructor(
    @Inject('CrewsRepository')
    private crewsRepository: CrewsRepository
  ) {}

  async execute(crew_input: CrewInput): Promise<Crew> {
    const crew = new Crew(crew_input)
    const result = await this.crewsRepository.create(crew)
    return result
  }
}
