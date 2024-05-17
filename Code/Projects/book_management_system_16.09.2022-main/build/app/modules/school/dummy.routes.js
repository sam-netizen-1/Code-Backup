"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const dummy_service_1 = __importDefault(require("./dummy.service"));
exports.DummyRouter = (0, express_1.Router)();
exports.DummyRouter.get("/", (req, res, next) => {
    try {
        const result = dummy_service_1.default.dummyGet();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=dummy.routes.js.map