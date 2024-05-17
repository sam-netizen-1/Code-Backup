import { School } from "../school/school.type";

export type Role = 'ADMIN' | 'WORKER';

export class User{
    constructor(
        public name : string,
        public email : string,
        public password : string,
        public role : Role,
        public id : string,
        public assignedSchools : string[],
        public statusOfApproval : boolean = false
    ){}
}