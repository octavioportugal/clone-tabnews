import database from "infra/database.js";

beforeAll(clearDataBase);

async function clearDataBase() {
  await database.query("drop schema public cascade; create schema public");
}

test("POST to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(Array.isArray(responseBody)).toBe(true);

  const checkDBForMigrationsTable = await database.query(
    "SELECT * FROM pgmigrations;",
  );
  console.log(checkDBForMigrationsTable.rows);
  expect(checkDBForMigrationsTable.rows.length).toBeGreaterThan(0);
});
