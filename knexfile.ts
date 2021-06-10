import { Knex } from 'knex';
import { databaseURI } from './utils/db';

const development: Knex.Config = {
  client: 'pg',
  connection: databaseURI,
};

export default development;
