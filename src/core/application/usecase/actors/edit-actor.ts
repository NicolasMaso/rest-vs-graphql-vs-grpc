import { Injectable, Inject } from '@nestjs/common'
import { ActorsRepository } from '../../repository/actors.repository.js'
import { ActorInput } from '../../../dto/actors.dto.js'
import { Actor } from '../../../domain/entity/actor.js'

@Injectable()
export class EditActor {
  constructor(
    @Inject('ActorsRepository')
    private actorsRepository: ActorsRepository
  ) {}

  async execute(actor_id: string, actor_input: ActorInput): Promise<Actor> {
    const actor = await this.actorsRepository.findById(actor_id)
    actor.data = actor_input
    return this.actorsRepository.edit(actor)
  }
}
