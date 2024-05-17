"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageSchema {
    constructor() {
        this.users = [
            {
                username: 'abhishektormal',
                password: '1234',
                send_messages: {}
            }, {
                username: 'samkitkothari',
                password: '1234',
                send_messages: {}
            },
            {
                username: 'adityasonawane',
                password: '1234',
                send_messages: {}
            },
            {
                username: 'shubhamwakchaure',
                password: '1234',
                send_messages: {}
            }
        ];
    }
    save(receivers, message, loginUser) {
        const messageObject = { time: new Date(), message: message };
        const userIndex = this.users.findIndex(user => user.username === loginUser);
        for (let receiver of receivers) {
            let receiverUser = this.users[userIndex].send_messages[receiver];
            if (receiverUser) {
                this.users[userIndex].send_messages[receiver].push(messageObject);
            }
            else {
                this.users[userIndex].send_messages[receiver] = [messageObject];
            }
        }
    }
    getAllUsers(loginUser) {
        const getAllusers = [];
        for (let user of this.users) {
            if (user.username !== loginUser) {
                getAllusers.push(user.username);
            }
        }
        return getAllusers;
    }
    getAllMessages(username, loginUser) {
        var _a, _b;
        let conversation = [];
        const loginUserMessages = (_a = this.users.find(user => user.username === username)) === null || _a === void 0 ? void 0 : _a.send_messages[loginUser];
        if (loginUserMessages) {
            const messages = [...loginUserMessages];
            for (let message of messages) {
                conversation.push(Object.assign(Object.assign({}, message), { type: 'receive' }));
            }
        }
        const receiverUserMessages = (_b = this.users.find(user => user.username === loginUser)) === null || _b === void 0 ? void 0 : _b.send_messages[username];
        if (receiverUserMessages) {
            const messages = [...receiverUserMessages];
            for (let message of messages) {
                conversation.push(Object.assign(Object.assign({}, message), { type: 'send' }));
            }
        }
        if (conversation.length) {
            conversation.sort((a, b) => a.time.getTime() - b.time.getTime());
        }
        return conversation;
    }
}
const messageSchema = new MessageSchema();
exports.default = messageSchema;
