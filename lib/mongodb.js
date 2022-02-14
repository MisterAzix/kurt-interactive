import { MongoClient } from "mongodb";

const { MONGODB_URI, DB_NAME } = process.env;

if (!MONGODB_URI) throw new Error("Define the MONGODB_URI environmental variable");
if (!DB_NAME) throw new Error("Define the DB_NAME environmental variable");

let cachedDb = null;

export async function connectToDatabase() {
    if (cachedDb) return cachedDb;

    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(DB_NAME);
    cachedDb = db;

    return cachedDb;
}
