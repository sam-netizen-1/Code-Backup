"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("../../utility/authorization");
const user_service_1 = __importDefault(require("../user/user.service"));
const login = (username, password) => {
    const users = user_service_1.default.getAllUsers();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        const token = (0, authorization_1.creatToken)(user);
        return { role: user.role, token: token, message: `WELCOME ${user.role} - ${user.name}!` };
    }
    throw { statusCode: 404, message: 'USER NOT FOUND!' };
};
exports.default = {
    login
};
