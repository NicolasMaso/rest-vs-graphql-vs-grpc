import { Release } from "../../../core/domain/entity/release.js";

export abstract class ReleasesRepository {
  abstract create(release: Release): Promise<Release>;
  abstract edit(release: Release): Promise<Release>;
  abstract delete(release_id: string): Promise<String>;
  abstract find(limit: number): Promise<Release[]>;
  abstract findById(release_id: string): Promise<Release>;
}
