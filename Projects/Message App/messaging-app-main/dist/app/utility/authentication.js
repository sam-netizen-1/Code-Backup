"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = exports.authentication = void 0;
const message_constant_1 = require("../modules/message/message.constant");
const message_schema_1 = __importDefault(require("../modules/message/message.schema"));
const response_handler_1 = require("./response-handler");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authentication = (req, res, next) => {
    const { username, password } = req.body;
    for (let user of message_schema_1.default.users) {
        if (username === user.username && password === user.password) {
            let jwtSecretKey = process.env.JWT_SECRET_KEY;
            let data = {
                time: Date(),
                username: user.username,
            };
            const token = jsonwebtoken_1.default.sign(data, jwtSecretKey);
            return res.status(200).send(new response_handler_1.Response({ token: token, message: `WELCOME ${data.username}!` }));
        }
    }
    next(message_constant_1.MESSAGES.AUTHENTICATION_FAILED);
};
exports.authentication = authentication;
const authorization = (req, res, next) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = req.headers.authorization;
    const verified = jsonwebtoken_1.default.verify(token, jwtSecretKey);
    res.locals = verified;
    if (verified) {
        return next();
    }
    next(message_constant_1.MESSAGES.AUTHENTICATION_FAILED);
};
exports.authorization = authorization;
