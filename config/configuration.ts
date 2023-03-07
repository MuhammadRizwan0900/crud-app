import * as dotenv from "dotenv";
dotenv.config();
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      dbDriver: process.env.DB_DRIVER,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      dbName: process.env.DATABASE_NAME
    }
  });