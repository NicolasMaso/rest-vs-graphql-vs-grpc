import { ExamplesRepository } from '../../../domain/repository/examples.repository'

export class MemoryExamplesRepository implements ExamplesRepository {
  private examples = [{
    name: 'Test'
  }]

  async findAll(): Promise<any> {
    return this.examples
  }
}