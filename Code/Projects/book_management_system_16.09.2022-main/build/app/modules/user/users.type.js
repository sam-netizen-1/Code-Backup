"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, password, role, id, assignedSchools, statusOfApproval = false) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.id = id;
        this.assignedSchools = assignedSchools;
        this.statusOfApproval = statusOfApproval;
    }
}
exports.User = User;
//# sourceMappingURL=users.type.js.map