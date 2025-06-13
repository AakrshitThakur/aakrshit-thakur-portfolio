import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

interface MongooseGlobal {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // Ensure we're not redefining in a hot-reload scenario
  var mongooseGlobal: MongooseGlobal;
}

// Initialize global variable if it doesn't exist
global.mongooseGlobal ||= {
  conn: null,
  promise: null,
};

async function dbConnect() {

  if (global.mongooseGlobal.conn) return global.mongooseGlobal.conn;

  if (!global.mongooseGlobal.promise) {
    global.mongooseGlobal.promise = mongoose.connect(MONGODB_URI!, {
      bufferCommands: false,
    });
  }

  // @ts-ignore
  global.mongooseGlobal.conn = await global.mongooseGlobal.promise;
  return global.mongooseGlobal.conn;
}

export default dbConnect;
