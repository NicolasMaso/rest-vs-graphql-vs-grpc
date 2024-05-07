import { Injectable, Inject } from '@nestjs/common'
import { ActorsRepository } from '../../repository/actors.repository.js'
import { Actor } from '../../../domain/entity/actor.js'

@Injectable()
export class ListActors {
  constructor(
    @Inject('ActorsRepository')
    private actorsRepository: ActorsRepository
  ) {}

  async execute(limit: number): Promise<Actor[]> {
    return this.actorsRepository.find(limit)
  }
}
