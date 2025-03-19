const mongoose = require("mongoose");

if (!process.env.MONGODB_URI) {
  throw new Error("Missing env variable 'uri' for database connection");
}
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "final",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
