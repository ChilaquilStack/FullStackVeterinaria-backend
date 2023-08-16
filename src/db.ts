import mongoose from "mongoose";
import config from "./config";

export default async function connectDB() {
    let DB_URI = '';
    if(process.env.NODE_ENV === 'production') {
        DB_URI = `mongodb+srv://${config.mongo.username}:${config.mongo.password}@${config.mongo.host}`;
    } else {
        DB_URI = `mongodb://${config.mongo.username}:${config.mongo.password}@${config.mongo.host}`;
    }
    mongoose.connect(DB_URI)
    .then(() => console.log("DB is connected"))
    .catch(error => console.log(console.error('Error connecting to MongoDB:', error)));
}