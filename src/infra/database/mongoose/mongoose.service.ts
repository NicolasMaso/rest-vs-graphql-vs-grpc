import * as mongoose from 'mongoose'

export const mongooseService = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      mongoose.set('strictQuery', false)
      return mongoose.connect(process.env.DATABASE_URL)
    }
  },
]