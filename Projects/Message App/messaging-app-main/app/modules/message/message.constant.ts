import { MessageResponse } from "./message.type";

export const MESSAGES = {
    AUTHENTICATION_FAILED: new MessageResponse(401, "UNAUTHORIZED"),
    NO_USERS: new MessageResponse(200, "NO USERS IN DATABASE"),
    NO_MSGS: new MessageResponse(200, "INBOX IS EMPTY"),
    MESSAGE_SENT: new MessageResponse(201, "MESSAGE SENT")
}
