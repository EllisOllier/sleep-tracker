const better_sqlite3 = require(`better-sqlite3`);
const path = require(`path`);

const dbPath = path.resolve(__dirname, `sleeptracker.db`);

const db = new Database(dbPath, { verbose : console.log});