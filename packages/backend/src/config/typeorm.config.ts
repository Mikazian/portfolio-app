import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { staticConfiguration } from './static-configuration';
import { AppEntities } from '../app/models';
import { Migrations } from '../migrations';

const typeormConfig: PostgresConnectionOptions = {
  ...staticConfiguration.database,
  entities: AppEntities,
  migrations: Migrations,
  migrationsTableName: 'typeorm_migrations',
  migrationsRun: true,
};

export default new DataSource(typeormConfig);

export { typeormConfig };
