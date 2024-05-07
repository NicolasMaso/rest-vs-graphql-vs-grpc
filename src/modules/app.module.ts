import { DatabaseModule } from './../core/infra/database/database.module.js';
import { MoviesModule } from './movies.module.js';
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ActorsModule } from './actors.module.js';
import { CrewsModule } from './crews.module.js';
import { ReleasesModule } from './releases.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    DatabaseModule,
    MoviesModule,
    ActorsModule,
    CrewsModule,
    ReleasesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '../core/infra/graphql/schema.gql',
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault() as any]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
