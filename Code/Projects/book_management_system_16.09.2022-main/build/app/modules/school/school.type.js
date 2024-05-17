"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor(schoolName, schoolID, UsersWithAccess, subjects, activeStatus) {
        this.schoolName = schoolName;
        this.schoolID = schoolID;
        this.UsersWithAccess = UsersWithAccess;
        this.subjects = subjects;
        this.activeStatus = activeStatus;
    }
}
exports.School = School;
// export type Schools = School[];
// export class Class{
//     constructor(
//         public className : string,
//         public subjects : Subject[]
//     ){}
// }
// export class Subject{
//     constructor(
//         public subjectName : string,
//         public subjectStatus : boolean = false
//     ){}
// }
// export interface ISchool{
//     schoolName : string,
//     SchoolID : string,
//     usersWithAccess : string[],
//     classes : {
//         subjects : {
//             [subject : string] : boolean
//         }
//     }
// }
//# sourceMappingURL=school.type.js.map