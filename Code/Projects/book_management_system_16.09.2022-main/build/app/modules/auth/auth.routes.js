"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const user_constants_1 = require("../user/user.constants");
const user_service_1 = require("../user/user.service");
const auth_service_1 = require("./auth.service");
const auth_validations_1 = require("./auth.validations");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post("/login", (req, res, next) => {
    try {
        const result = (0, auth_service_1.login)(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.AuthRouter.post("/signup", auth_validations_1.SignupValidator, (req, res, next) => {
    try {
        const result = (0, auth_service_1.signup)(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.AuthRouter.get('/pending-approvals', (0, authorize_1.permit)([user_constants_1.USER_ROLE.ADMIN]), (req, res, next) => {
    try {
        const result = (0, user_service_1.getPendingUsers)();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.AuthRouter.post('/change-status', (0, authorize_1.permit)([user_constants_1.USER_ROLE.ADMIN]), (req, res, next) => {
    const approvedUsers = req.body;
    try {
        const result = (0, user_service_1.changeStatus)(approvedUsers);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=auth.routes.js.map