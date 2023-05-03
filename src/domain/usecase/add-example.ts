import { Injectable, Inject } from '@nestjs/common'
import { ExamplesRepository } from '../repository/examples.repository'

@Injectable()
export class AddExample {
  constructor(
    @Inject('ExamplesRepository')
    private examplesRepository: ExamplesRepository
  ) {}

  async execute() {
    return this.examplesRepository.findAll()
  }
}