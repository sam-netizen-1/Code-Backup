"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = exports.verifyToken = exports.creatToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const creatToken = (payload) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jsonwebtoken_1.default.sign(payload, secretKey);
    return token;
};
exports.creatToken = creatToken;
const verifyToken = (token) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const payload = jsonwebtoken_1.default.verify(token, secretKey);
    return payload;
};
exports.verifyToken = verifyToken;
const authorization = (ExcludedRoutes) => {
    return (req, res, next) => {
        try {
            if (ExcludedRoutes.find(ERoutes => ERoutes.path == req.url && ERoutes.method == req.method)) {
                return next();
            }
            const token = req.headers.authorization;
            const payload = (0, exports.verifyToken)(token);
            res.locals.user = payload;
            return next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.authorization = authorization;
