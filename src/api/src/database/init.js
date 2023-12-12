import { execSeeds } from "./seed.js";
import { createTables } from "./tables.js";

function initDatabase() {
  createTables();
  execSeeds();
}

initDatabase();
