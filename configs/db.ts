import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const connectedDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("Already connected to MongoDB.");
            return;
        }

        const mongoUri = process.env.MONGODB_URL;
        if (!mongoUri) {
            throw new Error("MONGODB_URL is not defined in .env");
        }

        await mongoose.connect(mongoUri)
        console.log("Connected to MongoDB successfully.");
    } catch (err) {
        console.error("Error connecting to database:", err);
    }
};

export default connectedDB;
