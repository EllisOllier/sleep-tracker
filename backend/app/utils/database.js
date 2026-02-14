const better_sqlite3 = require(`better-sqlite3`);
const path = require(`path`);

const dbPath = path.resolve(__dirname, `sleeptracker.db`);

const db = new Database(dbPath, { verbose : console.log});

console.log(`Connected to SQLite database`);

const initDatabase = () => {
    // Users table 
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT
            email TEXT UNIQUE NOT NULL
            password TEXT NOT NULL
            name TEXT
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `)

    // Sleep entries table
    db.exec(`
        CREATE TABLE IF NOT EXISTS sleep_entries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            date TEXT NOT NULL,
            bedtime TEXT NOT NULL,
            wake_time TEXT NOT NULL,
            total_sleep_duration_minutes INTEGER,
            light_sleep_minutes INTEGER,
            deep_sleep_minutes INTEGER,
            rem_sleep_minutes INTEGER,
            awake_minutes INTEGER,
            sleep_performance_score INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);

    console.log('Database tables initialized');
}