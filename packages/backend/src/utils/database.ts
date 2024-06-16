import { Client } from 'pg';
import { staticConfiguration } from 'src/config/static-configuration';

export const createDatabase = async () => {
  const { host, port, username, password } = staticConfiguration.database;
  const client = new Client({
    host,
    port,
    user: username,
    password,
  });

  await client.connect();
  const result = await client.query(
    `SELECT 1 FROM pg_database WHERE datname = 'portfolio'`,
  );
  if (result.rows.length === 0) {
    await client.query(`CREATE DATABASE portfolio`);
  }
  await client.end();
};
