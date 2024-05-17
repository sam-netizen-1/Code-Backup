"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(data, error = null) {
        this.data = data;
        this.error = error;
    }
}
exports.Response = Response;
