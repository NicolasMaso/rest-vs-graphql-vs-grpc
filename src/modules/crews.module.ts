import { GraphqlDeleteCrewResolver } from '../core/adapter/controllers/crews/graphql/delete-crew.resolver.js';
import { GraphqlEditCrewResolver } from '../core/adapter/controllers/crews/graphql/edit-crew.resolver.js';
import { GraphqlAddCrewResolver } from '../core/adapter/controllers/crews/graphql/add-crew.resolver.js';
import { RestDeleteCrewController } from '../core/adapter/controllers/crews/rest/delete-crew.controller.js';
import { RestEditCrewController } from '../core/adapter/controllers/crews/rest/edit-crew.controller.js';
import { RestAddCrewController } from '../core/adapter/controllers/crews/rest/add-crew.controller.js';
import { GraphqlListCrewsResolver } from '../core/adapter/controllers/crews/graphql/list-crews.resolver.js';
import { RestListCrewsController } from '../core/adapter/controllers/crews/rest/list-crews.controller.js';
import { DatabaseModule } from '../core/infra/database/database.module.js';
import { Module } from '@nestjs/common'
import { AddCrew } from '../core/application/usecase/crews/add-crew.js';
import { EditCrew } from '../core/application/usecase/crews/edit-crew.js';
import { DeleteCrew } from '../core/application/usecase/crews/delete-crew.js';
import { ListCrews } from '../core/application/usecase/crews/list-crews.js';


@Module({
  imports: [DatabaseModule],
  controllers: [RestListCrewsController, RestAddCrewController, RestEditCrewController, RestDeleteCrewController],
  providers: [
    AddCrew,
    EditCrew,
    DeleteCrew,
    ListCrews,
    GraphqlListCrewsResolver,
    GraphqlAddCrewResolver,
    GraphqlEditCrewResolver,
    GraphqlDeleteCrewResolver
  ],
})
export class CrewsModule {}
