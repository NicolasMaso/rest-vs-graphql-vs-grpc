import { mongoMigrateCli } from 'mongo-migrate-ts'

mongoMigrateCli({
  uri: process.env.DATABASE_URL || '',
  database: '',
  migrationsDir: './migrations',
  migrationsCollection: 'changeCollections',
  options: {},
})
