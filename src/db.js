"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
async function connectDB() {
    const DB_URI = `mongodb://${config_1.default.mongo.username}:${config_1.default.mongo.password}@${config_1.default.server.host}:${config_1.default.mongo.port}`;
    mongoose_1.default.connect(DB_URI)
        .then(() => console.log("DB is connected"))
        .catch(error => console.log(console.error('Error connecting to MongoDB:', error)));
}
exports.default = connectDB;
