import { GraphqlDeleteActorResolver } from '../core/adapter/controllers/actors/graphql/delete-actor.resolver.js';
import { GraphqlEditActorResolver } from '../core/adapter/controllers/actors/graphql/edit-actor.resolver.js';
import { GraphqlAddActorResolver } from '../core/adapter/controllers/actors/graphql/add-actor.resolver.js';
import { RestDeleteActorController } from '../core/adapter/controllers/actors/rest/delete-actor.controller.js';
import { RestEditActorController } from '../core/adapter/controllers/actors/rest/edit-actor.controller.js';
import { RestAddActorController } from '../core/adapter/controllers/actors/rest/add-actor.controller.js';
import { GraphqlListActorsResolver } from '../core/adapter/controllers/actors/graphql/list-actors.resolver.js';
import { RestListActorsController } from '../core/adapter/controllers/actors/rest/list-actors.controller.js';
import { DatabaseModule } from '../core/infra/database/database.module.js';
import { Module } from '@nestjs/common'
import { AddActor } from '../core/application/usecase/actors/add-actor.js';
import { EditActor } from '../core/application/usecase/actors/edit-actor.js';
import { DeleteActor } from '../core/application/usecase/actors/delete-actor.js';
import { ListActors } from '../core/application/usecase/actors/list-actors.js';


@Module({
  imports: [DatabaseModule],
  controllers: [RestListActorsController, RestAddActorController, RestEditActorController, RestDeleteActorController],
  providers: [
    AddActor,
    EditActor,
    DeleteActor,
    ListActors,
    GraphqlListActorsResolver,
    GraphqlAddActorResolver,
    GraphqlEditActorResolver,
    GraphqlDeleteActorResolver
  ],
})
export class ActorsModule {}
