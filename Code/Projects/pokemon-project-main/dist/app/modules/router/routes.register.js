"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const routes_data_1 = require("./routes.data");
const cors_1 = __importDefault(require("cors"));
const registerRoutes = (app) => {
    app.use((0, cors_1.default)());
    app.use((0, express_1.json)());
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((response, req, res, next) => {
        response.statusCode !== 404 ? res.status(response.statusCode || 200).send(new response_handler_1.Response(response)) :
            res.status(response.statusCode || 500).send(new response_handler_1.Response(null, response));
    });
};
exports.registerRoutes = registerRoutes;
