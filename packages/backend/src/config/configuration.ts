import { config } from 'dotenv';

config();

export default () => ({
  api: {
    host: process.env.BACKEND_HOST,
    port: parseInt(process.env.BACKEND_PORT, 10),
  },
  database: {
    type: 'postgres' as const,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
