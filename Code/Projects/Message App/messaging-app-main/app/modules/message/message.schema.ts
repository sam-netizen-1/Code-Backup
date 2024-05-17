import { conversation, IMessage } from "./message.type";


class MessageSchema {
    users: IMessage[] = [
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

    save(receivers: string[], message: string, loginUser: string) {
        const messageObject = { time: new Date(), message: message };

        const userIndex = this.users.findIndex(user => user.username === loginUser);
        for (let receiver of receivers) {
            let receiverUser = this.users[userIndex].send_messages[receiver];
            if (receiverUser) {
                this.users[userIndex].send_messages[receiver].push(messageObject);
            } else {
                this.users[userIndex].send_messages[receiver] = [messageObject];
            }
        }
    }

    getAllUsers(loginUser: string) {
        const getAllusers = [];
        for (let user of this.users) {
            if (user.username !== loginUser) {
                getAllusers.push(user.username);
            }
        }
        return getAllusers;
    }

    getAllMessages(username: string, loginUser: string) {
        let conversation = [] as conversation[];

        const loginUserMessages = this.users.find(user => user.username === username)?.send_messages[loginUser];
        if (loginUserMessages) {
            const messages = [...loginUserMessages];
            for (let message of messages) {
                conversation.push({ ...message, type: 'receive' });
            }
        }

        const receiverUserMessages = this.users.find(user => user.username === loginUser)?.send_messages[username];
        if (receiverUserMessages) {
            const messages = [...receiverUserMessages];
            for (let message of messages) {
                conversation.push({ ...message, type: 'send' });
            }
        }

        if (conversation.length) {
            conversation.sort((a, b) => a.time.getTime() - b.time.getTime());
        }
        
        return conversation;
    }

}

const messageSchema = new MessageSchema();

export default messageSchema;