import { School } from "./school.type";


class SchoolSchema {
    public static schoolDB: School[] = [];

    get() {
        return SchoolSchema.schoolDB;
    }

    add(school : School){
        SchoolSchema.schoolDB.push(school);
    }

    delete(id :string){
        for(let school of SchoolSchema.schoolDB)
        {
            if(school.schoolID === id)
            {
                school.activeStatus = false;
            }
        }
    }

    updateAddSubject(id: string, subject : string, classes : any){
        
        for(let school of SchoolSchema.schoolDB)
        {
            if(school.schoolID === id)
            {
                school.subjects[subject] = classes[subject];
                school.subjectStatus[subject] = 'PENDING'; 
                school.overAllSchoolStatus = 'PARTIAL';
            }
        }
    }

    updateCheckSubject(id: string, subject : string, classes : any){
         
        for(let school of SchoolSchema.schoolDB)
        {
            if(school.schoolID === id)
            {
                for(let oneClass of classes)
                {
                    school.subjects[subject][oneClass] = true; 
                }
                return school;
            }
        }
    }

    updateAssignSchool(userId: string, schoolId : string){
         
        for(let school of SchoolSchema.schoolDB)
        {
            if(school.schoolID === schoolId)
            {
                school.UsersWithAccess.push(userId);

            }
        }        
    }
}

export const schoolSchema = new SchoolSchema();

