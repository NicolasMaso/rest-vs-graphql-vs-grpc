import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class Template implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    //
  }

  public async down(db: Db): Promise<any> {
    //
  }
}