import { Actor } from "../../../core/domain/entity/actor.js";

export abstract class ActorsRepository {
  abstract create(actor: Actor): Promise<Actor>;
  abstract edit(actor: Actor): Promise<Actor>;
  abstract delete(actor_id: string): Promise<String>;
  abstract find(limit: number): Promise<Actor[]>;
  abstract findById(actor_id: string): Promise<Actor>;
}
