import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActorsModel, ActorsSchema } from './mongoose/schemas/actors.schema';
import { MoviesModel, MoviesSchema } from './mongoose/schemas/movies.schema';
import { ReleasesModel, ReleasesSchema } from './mongoose/schemas/releases.schema';
import { CrewsModel, CrewsSchema } from './mongoose/schemas/crews.schema';
import { MongooseActorsRepository } from '../../adapter/repository/database/mongoose-actors.repository';
import { MongooseMoviesRepository } from '../../adapter/repository/database/mongoose-movies.repository';
import { MongooseReleasesRepository } from '../../adapter/repository/database/mongoose-releases.repository';
import { MongooseCrewsRepository } from '../../adapter/repository/database/mongoose-crews.repository';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URL,
      }),
    }),
    MongooseModule.forFeature([
      {
        name: ActorsModel.name,
        schema: ActorsSchema
      },
      {
        name: MoviesModel.name,
        schema: MoviesSchema
      },
      {
        name:ReleasesModel.name,
        schema:ReleasesSchema
      },
      {
        name: CrewsModel.name,
        schema: CrewsSchema
      },
    ])], 
  providers: [
    MongooseActorsRepository,
    {
      provide: 'ActorsRepository',
      useExisting: MongooseActorsRepository
    },
    MongooseMoviesRepository,
    {
      provide: 'MoviesRepository',
      useExisting: MongooseMoviesRepository
    },
    MongooseReleasesRepository,
    {
      provide: 'ReleasesRepository',
      useExisting: MongooseReleasesRepository
    },
    MongooseCrewsRepository,
    {
      provide: 'CrewsRepository',
      useExisting: MongooseCrewsRepository
    },
  ],
  exports: ['ActorsRepository', 'MoviesRepository', 'ReleasesRepository', 'CrewsRepository'],
})
export class DatabaseModule {}
