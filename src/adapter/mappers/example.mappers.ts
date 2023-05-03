import { Example } from '../../domain/entity/example'
import { ExampleModel } from '../../infra/database/mongoose/schemas/example.schema'

export class ExampleMappers {

  static toMongo(example: Example) {
    return {}
  }
  
  static toDomain(example: ExampleModel): Example {
    return new Example()
  }
}
