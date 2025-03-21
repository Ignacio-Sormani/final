const mongoose = require("mongoose");

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (!process.env.MONGODB_URI) {
    throw new Error(
      "Missing env variable 'MONGODB_URI' for database connection"
    );
  }

  if (cached.conn) return cached.conn;

  try {
    if (!cached.promise) {
      cached.promise = mongoose.connect(process.env.MONGODB_URI as string, {
        dbName: "final",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    cached.conn = await cached.promise;
    (global as any).mongoose = cached;

    return cached.conn;
  } catch (error) {
    throw new Error("Error connecting to database");
  }
}
