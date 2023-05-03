import { Model, Connection } from 'mongoose'
import { Injectable, Inject } from '@nestjs/common'
import { ExampleModel, ExampleSchema } from '../../../infra/database/mongoose/schemas/example.schema'
import { ExamplesRepository } from '../../../domain/repository/examples.repository'

export const examplesProviders = [
  {
    provide: 'Example_MODEL',
    useFactory: (connection: Connection) => connection.model('Examples', ExampleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]

@Injectable()
export class MongooseExamplesRepository implements ExamplesRepository {
  constructor(
    @Inject('Example_MODEL')
    private exampleModel: Model<ExampleModel>,
  ) {}

  async findAll(): Promise<ExampleModel[]> {
    return this.exampleModel.find().exec()
  }
}