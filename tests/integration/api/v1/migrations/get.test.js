import database from "infra/database.js";
// The below can be used in a Jest global setup file or similar for your testing set-up
import { loadEnvConfig } from "@next/env";
import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });

test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

  console.log("Print the env mode of node: " + process.env.NODE_ENV);
  console.log("Print the postgres_db data: " + process.env.POSTGRES_DB);
  console.log("Print the postgres_host data: " + process.env.POSTGRES_HOST);
  console.log("Print the postgres_port data: " + process.env.POSTGRES_PORT);
  console.log("Print the postgres_user data: " + process.env.POSTGRES_USER);
  console.log("Print the postgres_pwd data: " + process.env.POSTGRES_PASSWORD);
  console.log("Print the postgres_url data: " + process.env.DATABASE_URL);

  process.env.NODE_ENV = "development";

  console.log("Print the env mode of node: " + process.env.NODE_ENV);
  console.log("Print the postgres_db data: " + process.env.POSTGRES_DB);

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
