import mongoose from "mongoose";
import config from "./config";

export default async function connectDB() {
    const DB_URI = `mongodb://${config.mongo.username}:${config.mongo.password}@${config.server.host}:${config.mongo.port}`;
    mongoose.connect(DB_URI)
    .then(() => console.log("DB is connected"))
    .catch(error => console.log(console.error('Error connecting to MongoDB:', error)));
}