import { v4 } from "uuid";
import { userSchema } from "../user/user.schema";
import { schoolSchema } from "./school.schema";
import { School } from "./school.type";


export const getSchools = () => {

    const activeSchools = schoolSchema.get().filter(x => x.activeStatus === true);
    if(activeSchools.length === 0)
    {
        throw {
            statusCode : 404,
            message : 'NO SCHOOLS PRESENT'
        }
    }
    return activeSchools;
}

export const getOneSchool = (id : string) => {
    const school = schoolSchema.get().find(x => x.schoolID === id);
    if(!school)
    {
        throw {
            statusCode : 404,
            message : 'NO SUCH SCHOOL PRESENT'
        }
    }
    return school;
}

export const addSchool = (obj : any) => {
    const subjects = createSubjects(obj.subjects,obj.classes);
    schoolSchema.add(new School(obj.schoolName,v4(),obj.usersWithAccess,subjects,createSubjectStatus(obj.subjects),'PENDING',true));
    return {
        statusCode : 200,
        message : 'SCHOOL ADDED SUCESSFULLY'
    }
}


export const deleteSchool = (id : string) => {
    // if(schoolSchema.get().find(x => x.schoolID === id) === null || id === null)
    // {
    //     throw {
    //         statusCode : 404,
    //         message : 'NO SUCH SCHOOL EXISTS'
    //     }
    // }
    schoolSchema.delete(id);
    console.log('DELETE');
    return {
        statusCode : 200,
        message : 'SCHOOL DELETED SUCESSFULLY'
    }

}

export const addSubject = (id: string, subject : string, classes : string[] ) => {
    schoolSchema.updateAddSubject(id,subject,createSubjects([subject],classes));
    return {
        statusCode : 200,
        message : 'SUBJECT ADDED SUCESSFULLY'
    }
}

export const checkSubject = (id: string, subject : string, classes : string[] ) => {
    const school = schoolSchema.updateCheckSubject(id,subject,classes);
    statusUpdatation(school,subject);
    return {
        statusCode : 200,
        message : 'SUBJECT CHECKED SUCESSFULLY'
    }
}

export const assignSchool = (userId: string, schoolId : string) => {
    schoolSchema.updateAssignSchool(userId,schoolId);
    userSchema.updateAssignSchool(userId,schoolId);
    return {
        statusCode : 200,
        message : 'SCHOOL ASSIGNED SUCESSFULLY'
    }
}

export const getAssignedSchools = (userId : string) => {

    try {
        const userSchools = userSchema.get().find(x => x.id === userId)?.assignedSchools || [];
        const schools : any = [];
        for(let school of userSchools)
        {
            const oneSchool = schoolSchema.get().find(x => x.schoolID === school);
            schools.push(oneSchool);
        }
        if(schools.length === 0)
        {
            throw {
                statusCode : 404,
                message : 'NO SCHOOLS PRESENT'
            }
        }
        return schools;
    } catch (error) {
        throw {
            statusCode : 404,
            message : 'NO SCHOOLS ASSIGNED'
        }
    }

}

// <------------------------------------------------------------->

// COMPUTING FUNCTIONS

const createSubjectStatus = (subjects : string[]) => {
    const createdSubjects : any = {};
    for(let subject of subjects)
    {
        createdSubjects[subject] = 'PENDING';
    }
    return createdSubjects;
}

const createSubjects = (subjects : string[], classes : string[]) => {
    const createdSubjects : any = {};
    for(let subject of subjects)
    {
        createdSubjects[subject] = createClasses(classes);
    }
    return createdSubjects;
}

const createClasses = (classes : string[]) => {
    const createdClass : any = {};
    for(let oneClass of classes)
    {
        createdClass[oneClass] = false;
    }
    return createdClass;
}

const statusUpdatation = (school : any, subject : string) => {
    const arrayOfStatus = Object.values(school.subjects[subject]);
    const statusCount = arrayOfStatus.filter(x => x === true);
    if(statusCount.length === arrayOfStatus.length)
    {
        school.subjectStatus[subject] = 'COMPLETE';
    }
    else if(statusCount.length > 0 && statusCount.length < arrayOfStatus.length)
    {
        school.subjectStatus[subject] = 'PARTIAL';
    }
    const statusArray = Object.values(school.subjectStatus);
    const completeCount = statusArray.filter(x => x === 'COMPLETE');
    if(completeCount.length === statusArray.length)
    {
        school.overAllSchoolStatus = 'COMPLETE';
    }
    if(completeCount.length < statusArray.length && completeCount.length > 0)
    {
        school.overAllSchoolStatus = 'PARTIAL';
    }
}