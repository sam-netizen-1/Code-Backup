"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const auth_service_1 = __importDefault(require("./auth.service"));
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post('/', (req, res, next) => {
    try {
        const { username, password } = req.body;
        const result = auth_service_1.default.login(username, password);
        res.send(new response_handler_1.Response(result));
    }
    catch (error) {
        next(error);
    }
});
exports.AuthRouter.get('/', (req, res, next) => {
    res.status(200).send(new response_handler_1.Response({ message: 'LOGOUT SUCCESSFULLY!' }));
});
