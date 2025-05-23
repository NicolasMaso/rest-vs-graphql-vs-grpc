import { GraphqlDeleteReleaseResolver } from '../core/adapter/controllers/releases/graphql/delete-release.resolver.js';
import { GraphqlEditReleaseResolver } from '../core/adapter/controllers/releases/graphql/edit-release.resolver.js';
import { GraphqlAddReleaseResolver } from '../core/adapter/controllers/releases/graphql/add-release.resolver.js';
import { RestDeleteReleaseController } from '../core/adapter/controllers/releases/rest/delete-release.controller.js';
import { RestEditReleaseController } from '../core/adapter/controllers/releases/rest/edit-release.controller.js';
import { RestAddReleaseController } from '../core/adapter/controllers/releases/rest/add-release.controller.js';
import { GraphqlListReleasesResolver } from '../core/adapter/controllers/releases/graphql/list-releases.resolver.js';
import { RestListReleasesController } from '../core/adapter/controllers/releases/rest/list-releases.controller.js';
import { DatabaseModule } from '../core/infra/database/database.module.js';
import { Module } from '@nestjs/common'
import { AddRelease } from '../core/application/usecase/releases/add-release.js';
import { EditRelease } from '../core/application/usecase/releases/edit-release.js';
import { DeleteRelease } from '../core/application/usecase/releases/delete-release.js';
import { ListReleases } from '../core/application/usecase/releases/list-releases.js';


@Module({
  imports: [DatabaseModule],
  controllers: [RestListReleasesController, RestAddReleaseController, RestEditReleaseController, RestDeleteReleaseController],
  providers: [
    AddRelease,
    EditRelease,
    DeleteRelease,
    ListReleases,
    GraphqlListReleasesResolver,
    GraphqlAddReleaseResolver,
    GraphqlEditReleaseResolver,
    GraphqlDeleteReleaseResolver
  ],
})
export class ReleasesModule {}
