export type conversation = {
    time: Date,
    message: string,
    type: 'send' | 'receive'
}

type messageType = {
    time: Date,
    message: string
}

type sender = {
    [receiver_name: string]: messageType[]
}

export interface IMessage {
    username: string;
    password: string,
    send_messages: sender;
}

export class MessageResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}
