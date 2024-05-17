"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const uuid_1 = require("uuid");
const password_1 = require("../../utility/password");
const users_type_1 = require("./users.type");
class Users {
    get() {
        return Users.usersDB;
    }
    create(obj) {
        Users.usersDB.push(obj);
    }
    update(approvedUsers) {
        for (let user of Users.usersDB) {
            if (approvedUsers.includes(user.id)) {
                user.statusOfApproval = true;
            }
        }
    }
}
Users.usersDB = [
    new users_type_1.User('FIRST ADMIN', 'admin@000', (0, password_1.createHash)('admin000'), 'ADMIN', (0, uuid_1.v4)(), [], true)
];
exports.userSchema = new Users();
//# sourceMappingURL=user.schema.js.map