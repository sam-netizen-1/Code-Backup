"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const user_constants_1 = require("../user/user.constants");
const school_service_1 = require("./school.service");
exports.schoolRouter = (0, express_1.Router)();
exports.schoolRouter.get("/get-schools", (0, authorize_1.permit)([user_constants_1.USER_ROLE.ADMIN]), (req, res, next) => {
    try {
        const result = (0, school_service_1.getSchools)();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.schoolRouter.post("/add-schools", (0, authorize_1.permit)([user_constants_1.USER_ROLE.ADMIN]), (req, res, next) => {
    try {
        const result = (0, school_service_1.addSchool)(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.schoolRouter.put("/delete-school/:id", (0, authorize_1.permit)([user_constants_1.USER_ROLE.ADMIN]), (req, res, next) => {
    const schoolID = req.params.id;
    try {
        const result = (0, school_service_1.deleteSchool)(schoolID);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.schoolRouter.post("/add-subject", (0, authorize_1.permit)([user_constants_1.USER_ROLE.ADMIN]), (req, res, next) => {
    try {
        const result = (0, school_service_1.addSubject)(req.body.id, req.body.subject, req.body.classes);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.schoolRouter.put("/check-subject", (0, authorize_1.permit)([user_constants_1.USER_ROLE.WORKER]), (req, res, next) => {
    try {
        const result = (0, school_service_1.checkSubject)(req.body.id, req.body.subject, req.body.classes);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=school.routes.js.map