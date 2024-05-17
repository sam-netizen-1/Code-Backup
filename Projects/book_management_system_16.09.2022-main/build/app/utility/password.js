"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHash = exports.comparePassword = void 0;
const bcryptjs_1 = require("bcryptjs");
const comparePassword = (password, hashedPassword) => {
    return (0, bcryptjs_1.compareSync)(password, hashedPassword);
};
exports.comparePassword = comparePassword;
const createHash = (password) => {
    const salt = (0, bcryptjs_1.genSaltSync)();
    const hashedPassword = (0, bcryptjs_1.hashSync)(password, salt);
    return hashedPassword;
};
exports.createHash = createHash;
//# sourceMappingURL=password.js.map