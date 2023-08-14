"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetch(callback) {
    let data = null;
    let error = null;
    try {
        data = await callback();
    }
    catch (e) {
        error = e.message;
    }
    return { data, error };
}
exports.default = fetch;
