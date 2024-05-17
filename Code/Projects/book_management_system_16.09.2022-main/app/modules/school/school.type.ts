export class School{
    constructor(
        public schoolName : string,
        public schoolID : string,
        public UsersWithAccess : string[],
        public subjects : ISubject,
        public subjectStatus : ISubjectStatus,
        public overAllSchoolStatus :Status,
        public activeStatus : boolean

    ){}
}

export interface ISubject {
    [subjectName : string] : {
        [className : string] : boolean,        
    }
}

export interface ISubjectStatus{
    [subjectName : string] : Status
}


export type Status = 'PENDING' | 'PARTIAL' | 'COMPLETE' 

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




