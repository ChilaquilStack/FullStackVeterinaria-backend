"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Server_app, _Server_port;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv/config');
const db_1 = __importDefault(require("./db"));
const Pacientes_routes_1 = __importDefault(require("./routes/Pacientes.routes"));
class Server {
    constructor() {
        _Server_app.set(this, void 0);
        _Server_port.set(this, void 0);
        __classPrivateFieldSet(this, _Server_app, (0, express_1.default)(), "f");
        this.midlewares();
        __classPrivateFieldSet(this, _Server_port, Number(process.env.port) || 3000, "f");
    }
    midlewares() {
        __classPrivateFieldGet(this, _Server_app, "f").use(express_1.default.json());
        __classPrivateFieldGet(this, _Server_app, "f").use('/', Pacientes_routes_1.default);
    }
    listen() {
        __classPrivateFieldGet(this, _Server_app, "f").listen(__classPrivateFieldGet(this, _Server_port, "f"), () => {
            (0, db_1.default)();
            console.log(`Server is running at http://localhost:${__classPrivateFieldGet(this, _Server_port, "f")}/`);
        });
    }
}
_Server_app = new WeakMap(), _Server_port = new WeakMap();
exports.default = Server;
