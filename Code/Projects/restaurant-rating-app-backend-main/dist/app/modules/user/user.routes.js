"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const user_service_1 = __importDefault(require("./user.service"));
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.get('/reviews', (req, res, next) => {
    try {
        const role = res.locals.user.role;
        const name = res.locals.user.name;
        const result = user_service_1.default.getAllReviews(role, name);
        res.status(200).send(new response_handler_1.Response(result));
    }
    catch (error) {
        next(error);
    }
});
