import { Knex } from 'knex';
import { databaseURI } from './utils';

const development: Knex.Config = {
  client: 'pg',
  connection: databaseURI,
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations',
  },
};

export default development;
