import mongoose from 'mongoose'
import { config } from 'dotenv'

export async function connectDB(){
    try {
        const responce = await mongoose.connect(process.env.MONGODB_URL || "")
        console.log(`MongoDB connected: ${responce.connection.host}`);
    } catch (error) {
      console.log("MongoDB connection error:", error);
    }
}