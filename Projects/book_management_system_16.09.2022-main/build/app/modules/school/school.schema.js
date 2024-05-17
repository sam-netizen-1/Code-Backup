"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolSchema = void 0;
class SchoolSchema {
    get() {
        return SchoolSchema.schoolDB;
    }
    add(school) {
        SchoolSchema.schoolDB.push(school);
    }
    delete(id) {
        for (let school of SchoolSchema.schoolDB) {
            if (school.schoolID === id) {
                school.activeStatus = false;
            }
        }
    }
    updateAddSubject(id, subject, classes) {
        for (let school of SchoolSchema.schoolDB) {
            if (school.schoolID === id) {
                school.subjects[subject] = classes[subject];
            }
        }
    }
    updateCheckSubject(id, subject, classes) {
        try {
            for (let school of SchoolSchema.schoolDB) {
                if (school.schoolID === id) {
                    for (let oneClass of classes) {
                        school.subjects[subject].classes[oneClass] = true;
                    }
                }
            }
        }
        catch (error) {
            throw 'LOGIC FUCKED';
        }
    }
}
SchoolSchema.schoolDB = [];
exports.schoolSchema = new SchoolSchema();
//# sourceMappingURL=school.schema.js.map