export interface ICredentials {
    email: string;
    password: string;
}

export class AuthResponses {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}