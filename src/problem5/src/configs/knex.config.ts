import dotenv from 'dotenv';
import utils from '../utils/util';
import { Knex } from 'knex';

dotenv.config({
    path: '../../.env'
});

const env = process.env;

interface KnexConfig {
  [key: string]: Knex.Config;
}

const config: KnexConfig = {
  development: {
    client: env.DEV_DB_CLIENT,
    connection: {
      host: env.DEV_DB_HOST,
      user: env.DEV_DB_USER,
      password: env.DEV_DB_PASS,
      database: env.DEV_DB_NAME,
      port: parseInt(env.DEV_DB_PORT || '5432'),
    },
    pool: {
      min: 2,
      max: parseInt(env.DEV_DB_POOL_MAX || '30'),
    },
    useNullAsDefault: true,
    debug: env.DEBUG?.toLowerCase() === 'true'
  },
  production: {
    client: env.PROD_DB_CLIENT,
    connection: {
      user: env.PROD_DB_USER,
      host: env.PROD_DB_HOST,
      password: env.PROD_DB_PASS,
      database: env.PROD_DB_NAME,
      port: parseInt(env.PROD_DB_PORT || '5432'),
    },
    pool: {
      min: 2,
      max: parseInt(env.PROD_DB_POOL_MAX || '30'),
    },
  },
};

const environment = utils.environment();
export default config[environment];
