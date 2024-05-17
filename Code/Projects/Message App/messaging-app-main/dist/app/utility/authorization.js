"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorization = (excludedRoutes) => {
    return (req, res, next) => {
        try {
            if (excludedRoutes.find(route => route.url === req.url && route.method === req.method)) {
                return next();
            }
            const jwtSecretKey = process.env.JWT_SECRET_KEY;
            const token = req.headers.authorization;
            const verified = jsonwebtoken_1.default.verify(token, jwtSecretKey);
            res.locals = verified;
            next();
        }
        catch (e) {
            next(e);
        }
    };
};
exports.authorization = authorization;
