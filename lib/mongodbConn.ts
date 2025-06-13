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
  // @ts-ignore
  var mongooseGlobal: MongooseGlobal;
}

// Initialize global variable if it doesn't exist
// @ts-ignore
global.mongooseGlobal ||= {
  conn: null,
  promise: null,
};

async function dbConnect() {
  // @ts-ignore
  if (global.mongooseGlobal.conn) return global.mongooseGlobal.conn;

  // @ts-ignore
  if (!global.mongooseGlobal.promise) {
    // @ts-ignore
    global.mongooseGlobal.promise = mongoose.connect(MONGODB_URI!, {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  // @ts-ignore
  global.mongooseGlobal.conn = await global.mongooseGlobal.promise;
  // @ts-ignore
  return global.mongooseGlobal.conn;
}

export default dbConnect;
