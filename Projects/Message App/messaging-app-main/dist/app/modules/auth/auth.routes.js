"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const message_constant_1 = require("../message/message.constant");
const message_schema_1 = __importDefault(require("../message/message.schema"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
// login
router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    const user = message_schema_1.default.users.find(user => user.username === username && user.password === password);
    if (user) {
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const data = { time: Date(), username: user.username };
        const token = jsonwebtoken_1.default.sign(data, jwtSecretKey);
        return res.status(200).send(new response_handler_1.Response({ token: token, message: `WELCOME ${data.username}!` }));
    }
    next(message_constant_1.MESSAGES.AUTHENTICATION_FAILED);
});
// logout
router.get('/logout', (req, res, next) => {
    return res.status(200).send(new response_handler_1.Response({ message: 'LOGOUT SUCCESSFULLY!' }));
});
exports.default = router;
