"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedRoutes = exports.routes = void 0;
const routes_type_1 = require("./routes.type");
const message_route_1 = __importDefault(require("../message/message.route"));
const auth_routes_1 = __importDefault(require("../auth/auth.routes"));
exports.routes = [
    new routes_type_1.Route('/auth', auth_routes_1.default),
    new routes_type_1.Route('/messenger', message_route_1.default)
];
exports.excludedRoutes = [
    { url: "/auth/login", method: "POST" }
];
