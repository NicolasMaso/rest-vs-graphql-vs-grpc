import { Release } from './../../../domain/entity/release.js';
import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { ReleasesModel } from '../../../infra/database/mongoose/schemas/releases.schema.js'
import { ReleasesRepository } from '../../../../core/application/repository/releases.repository.js'
import { InjectModel } from '@nestjs/mongoose'
import { ReleaseMappers } from '../mappers/release-mappers.js';


@Injectable()
export class MongooseReleasesRepository implements ReleasesRepository {
  constructor(
    @InjectModel(ReleasesModel.name) private readonly releasesModel: Model<ReleasesModel>,
  ) {}

  async create(release: Release): Promise<Release> {
    const releaseToMongo = ReleaseMappers.toMongo(release)
    await this.releasesModel.create(releaseToMongo)
    return release
  }

  async edit(release: Release): Promise<Release> {
    const releaseToMongo = ReleaseMappers.toMongo(release)
    await this.releasesModel.updateOne({ _id: release.id }, releaseToMongo)
    return release
  }
  async delete(release_id: string): Promise<String> {
    await this.releasesModel.deleteOne({ _id: release_id })
    return 'Lançamento do filme removido com sucesso.'
  }

  async find(limit: number): Promise<Release[]> {
    const releases = await this.releasesModel.find().limit(limit).exec()
    return releases.map(release => ReleaseMappers.toDomain(release))
  }

  async findById(release_id: string): Promise<Release> {
    const release = await this.releasesModel.findOne({ _id: release_id })
    return release ? ReleaseMappers.toDomain(release) : null
  }
}
