"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatus = exports.addUser = exports.getPendingUsers = exports.getUser = void 0;
const uuid_1 = require("uuid");
const auth_responses_1 = require("../auth/auth.responses");
const user_schema_1 = require("./user.schema");
const users_type_1 = require("./users.type");
const getUser = () => {
    return user_schema_1.userSchema.get();
};
exports.getUser = getUser;
const getPendingUsers = () => {
    const users = user_schema_1.userSchema.get();
    const pendingUsers = users.filter(x => x.statusOfApproval === false);
    if (pendingUsers.length === 0) {
        throw auth_responses_1.AUTH_ERRORS.NO_USER;
    }
    return pendingUsers;
};
exports.getPendingUsers = getPendingUsers;
const addUser = (obj) => {
    if (!user_schema_1.userSchema.get().find(x => x.email === obj.email)) {
        user_schema_1.userSchema.create(new users_type_1.User(obj.name, obj.email, obj.password, 'WORKER', (0, uuid_1.v4)(), [], false));
    }
    else {
        throw auth_responses_1.AUTH_ERRORS.USER_EXISTS;
    }
};
exports.addUser = addUser;
const changeStatus = (approvedUsers) => {
    user_schema_1.userSchema.update(approvedUsers);
    // sendEmail(user.email, "CONGRATS YOU HAVE BEEN APPROVED", `
    //     Hi, ${user.name},
    //     You have been sucessfully approved for the position of WORKER.
    //     To check the school and their subjects that have been assigned to you.
    //     Please login on the below credentials: 
    //     email: ${user.email}
    //     password: ${originalPassword}
    // `)
    return {
        statusCode: 204,
        message: 'USERS APPROVED SUCCESSFULLY'
    };
};
exports.changeStatus = changeStatus;
//# sourceMappingURL=user.service.js.map