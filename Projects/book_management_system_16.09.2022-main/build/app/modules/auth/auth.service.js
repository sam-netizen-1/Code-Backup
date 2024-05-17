"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.login = void 0;
const authorize_1 = require("../../utility/authorize");
const password_1 = require("../../utility/password");
const user_service_1 = require("../user/user.service");
const auth_responses_1 = require("./auth.responses");
const login = (credentials) => {
    const users = (0, user_service_1.getUser)();
    const user = users.find(u => u.email === credentials.email &&
        (0, password_1.comparePassword)(credentials.password, u.password));
    if (!user) {
        throw auth_responses_1.AUTH_ERRORS.NOT_FOUND;
    }
    const token = (0, authorize_1.createToken)({ id: user.id, role: user.role });
    return {
        token,
        statusCode: 200,
        message: 'SUCCESSFULLY LOGGED IN!',
        role: user.role
    };
};
exports.login = login;
const signup = (user) => {
    try {
        const originalPassword = user.password;
        user.password = (0, password_1.createHash)(originalPassword);
        (0, user_service_1.addUser)(user);
        return {
            statusCode: 200,
            message: 'USER ADDED SUCCESSFULLY'
        };
    }
    catch (e) {
        throw e;
    }
};
exports.signup = signup;
//# sourceMappingURL=auth.service.js.map