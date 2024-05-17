"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = void 0;
const message_type_1 = require("./message.type");
exports.MESSAGES = {
    AUTHENTICATION_FAILED: new message_type_1.MessageResponse(401, "UNAUTHORIZED"),
    NO_USERS: new message_type_1.MessageResponse(200, "NO USERS IN DATABASE"),
    NO_MSGS: new message_type_1.MessageResponse(200, "INBOX IS EMPTY"),
    MESSAGE_SENT: new message_type_1.MessageResponse(201, "MESSAGE SENT")
};
