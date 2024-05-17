"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permit = exports.authorize = exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const createToken = (payload) => {
    const { JWT_SECRET } = process.env;
    const token = (0, jsonwebtoken_1.sign)(payload, JWT_SECRET || '');
    return token;
};
exports.createToken = createToken;
const verifyToken = (token) => {
    const { JWT_SECRET } = process.env;
    const payload = (0, jsonwebtoken_1.verify)(token, JWT_SECRET || '');
    return payload;
};
exports.verifyToken = verifyToken;
const authorize = (excludedPaths) => {
    return (req, res, next) => {
        try {
            if (excludedPaths.find(e => e.path === req.url && e.method === req.method)) {
                return next();
            }
            const token = req.headers.authorization || '';
            const payload = (0, exports.verifyToken)(token);
            res.locals.user = payload;
            next();
        }
        catch (e) {
            next({ statusCode: 403, message: 'UN-AUTHORIZED' });
        }
    };
};
exports.authorize = authorize;
const permit = (permittedRoles) => {
    return (req, res, next) => {
        if (permittedRoles.includes(res.locals.user.role)) {
            return next();
        }
        next({ statusCode: 403, message: 'UN-AUTHORIZED' });
    };
};
exports.permit = permit;
//# sourceMappingURL=authorize.js.map