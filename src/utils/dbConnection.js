//TODO: set up our database pool using the pg package
import pg from "pg";

const dbConnectionString = process.env.NEXT_PUBLIC_DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
