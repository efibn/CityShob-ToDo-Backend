// src/config/mongo.ts
import mongoose from 'mongoose';

export class MongoConnection {
  private static instance: MongoConnection;

  private constructor() {}

  public static getInstance(): MongoConnection {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection();
    }
    return MongoConnection.instance;
  }

  public async connect(uri: string): Promise<void> {
    try {
      await mongoose.connect(uri);
      console.log('[MongoDB] Connected');
    } catch (err) {
      console.error('[MongoDB] Connection error:', err);
      process.exit(1);
    }
  }
}
