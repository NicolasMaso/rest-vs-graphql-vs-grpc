import { Injectable, Inject } from '@nestjs/common'
import { ActorsRepository } from '../../repository/actors.repository.js'

@Injectable()
export class DeleteActor {
  constructor(
    @Inject('ActorsRepository')
    private actorsRepository: ActorsRepository
  ) {}

  async execute(actor_id: string): Promise<String> {
    return this.actorsRepository.delete(actor_id)
  }
}
