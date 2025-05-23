import { Injectable, Inject } from '@nestjs/common'
import { CrewsRepository } from '../../repository/crews.repository.js'
import { Crew } from '../../../domain/entity/crew.js'

@Injectable()
export class ListCrews {
  constructor(
    @Inject('CrewsRepository')
    private crewsRepository: CrewsRepository
  ) {}

  async execute(limit: number): Promise<Crew[]> {
    return this.crewsRepository.find(limit)
  }
}
