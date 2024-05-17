"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_constant_1 = require("./message.constant");
const message_schema_1 = __importDefault(require("./message.schema"));
const save = (receiver, message, loginUser) => {
    message_schema_1.default.save(receiver, message, loginUser);
    return message_constant_1.MESSAGES.MESSAGE_SENT;
};
const getAllUsers = (loginUser) => {
    const users = message_schema_1.default.getAllUsers(loginUser);
    if (users.length) {
        return users;
    }
    return message_constant_1.MESSAGES.NO_USERS;
};
const getAllMessages = (username, loginUser) => {
    const messages = message_schema_1.default.getAllMessages(username, loginUser);
    if (messages.length) {
        return messages;
    }
    return message_constant_1.MESSAGES.NO_MSGS;
};
exports.default = {
    save,
    getAllUsers,
    getAllMessages
};
