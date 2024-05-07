import { Crew } from "../../../core/domain/entity/crew.js";

export abstract class CrewsRepository {
  abstract create(crew: Crew): Promise<Crew>;
  abstract edit(crew: Crew): Promise<Crew>;
  abstract delete(crew_id: string): Promise<String>;
  abstract find(limit: number): Promise<Crew[]>;
  abstract findById(crew_id: string): Promise<Crew>;
}
