import { Injectable, Inject } from '@nestjs/common'
import { ActorsRepository } from '../../repository/actors.repository.js'
import { ActorInput } from '../../../dto/actors.dto.js'
import { Actor } from '../../../domain/entity/actor.js'

@Injectable()
export class AddActor {
  constructor(
    @Inject('ActorsRepository')
    private actorsRepository: ActorsRepository
  ) {}

  async execute(actor_input: ActorInput): Promise<Actor> {
    const actor = new Actor(actor_input)
    const result = await this.actorsRepository.create(actor)
    return result
  }
}
