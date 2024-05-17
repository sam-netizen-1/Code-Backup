import { MESSAGES } from "./message.constant";
import messageSchema from "./message.schema";

const save = (receiver: string[], message: string, loginUser: string) => {
    messageSchema.save(receiver, message, loginUser);
    return MESSAGES.MESSAGE_SENT;
}


const getAllUsers = (loginUser: string) => {
    const users = messageSchema.getAllUsers(loginUser);
    if (users.length) {
        return users;
    }
    return MESSAGES.NO_USERS;
}

const getAllMessages = (username: string, loginUser: string) => {
    const messages = messageSchema.getAllMessages(username, loginUser);
    if (messages.length) {
        return messages;
    }
    return MESSAGES.NO_MSGS;
}

export default {
    save,
    getAllUsers,
    getAllMessages
}
