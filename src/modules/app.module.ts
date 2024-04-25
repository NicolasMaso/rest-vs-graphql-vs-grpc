import { DatabaseModule } from './../core/infra/database/database.module';
import { MoviesModule } from './movies.module';
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ScheduleModule } from '@nestjs/schedule'
import { join } from 'path'
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    DatabaseModule,
    MoviesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'coverage', 'lcov-report'),
      renderPath: '/tests'
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '../core/infra/graphql/schema.gql',
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
