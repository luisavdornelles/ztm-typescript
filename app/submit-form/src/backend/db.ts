import { AsyncDatabase } from 'promised-sqlite3';
import { v4 as uuidv4 } from "uuid";

export interface User {
    id: number;
    email: string;
    hashedPassword: string; // TODO: hash password
    agreedToTerms: boolean;
}

export interface UserRepository {
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    get(userId: number): Promise<User | undefined>;
}

// Implements the database connection
// There could be another class to implement to Postgress for example
export class SqliteUserRepository implements UserRepository {
    constructor(private readonly db: AsyncDatabase) {}

    create(user: User): Promise<User> {}
    findByEmail(email: string): Promise<User | undefined> {}
    get(userId: number): Promise<User | undefined> {}
}

export async function connect(connectionString: string): Promise<AsyncDatabase> {
    return await AsyncDatabase.open(connectionString);
}

export async function newDb(db: AsyncDatabase): Promise<void> {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            hashedPassword TEXT NOT NULL,
            agreedToTerms BOOLEAN NOT NULL
        );
        CREATE TABLE IF NOT EXISTS sessions (
            session_id UUID PRIMARY KEY,
            user_id INTEGER NOT NULL,
            FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `);
}
  