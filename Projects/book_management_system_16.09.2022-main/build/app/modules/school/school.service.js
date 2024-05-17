"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSubject = exports.addSubject = exports.deleteSchool = exports.addSchool = exports.getSchools = void 0;
const uuid_1 = require("uuid");
const school_schema_1 = require("./school.schema");
const school_type_1 = require("./school.type");
const getSchools = () => {
    const activeSchools = school_schema_1.schoolSchema.get().filter(x => x.activeStatus === true);
    if (activeSchools.length === 0) {
        throw {
            statusCode: 404,
            message: 'NO SCHOOLS PRESENT'
        };
    }
    return activeSchools;
};
exports.getSchools = getSchools;
const addSchool = (obj) => {
    const subjects = createSubjects(obj.subjects, obj.classes);
    school_schema_1.schoolSchema.add(new school_type_1.School(obj.schoolName, (0, uuid_1.v4)(), obj.usersWithAccess, subjects, true));
    return {
        statusCode: 200,
        message: 'SCHOOL ADDED SUCESSFULLY'
    };
};
exports.addSchool = addSchool;
const deleteSchool = (id) => {
    // if(schoolSchema.get().find(x => x.schoolID === id) === null || id === null)
    // {
    //     throw {
    //         statusCode : 404,
    //         message : 'NO SUCH SCHOOL EXISTS'
    //     }
    // }
    school_schema_1.schoolSchema.delete(id);
    console.log('DELETE');
    return {
        statusCode: 200,
        message: 'SCHOOL DELETED SUCESSFULLY'
    };
};
exports.deleteSchool = deleteSchool;
const addSubject = (id, subject, classes) => {
    school_schema_1.schoolSchema.updateAddSubject(id, subject, createSubjects([subject], classes));
    return {
        statusCode: 200,
        message: 'SUBJECT ADDED SUCESSFULLY'
    };
};
exports.addSubject = addSubject;
const checkSubject = (id, subject, classes) => {
    school_schema_1.schoolSchema.updateCheckSubject(id, subject, classes);
    return {
        statusCode: 200,
        message: 'SUBJECT CHECKED SUCESSFULLY'
    };
};
exports.checkSubject = checkSubject;
// <------------------------------------------------------------->
// COMPUTING FUNCTIONS
const createSubjects = (subjects, classes) => {
    const createdSubjects = {};
    for (let subject of subjects) {
        createdSubjects[subject] = createClasses(classes);
        createdSubjects[subject].overallStatus = 'PENDING';
    }
    return createdSubjects;
};
const createClasses = (classes) => {
    const createdClass = {};
    for (let oneClass of classes) {
        createdClass[oneClass] = false;
    }
    return createdClass;
};
//# sourceMappingURL=school.service.js.map