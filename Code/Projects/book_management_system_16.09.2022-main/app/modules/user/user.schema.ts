import { v4 } from "uuid";
import { createHash } from "../../utility/password";
import { USER_ROLE } from "./user.constants";
import { User } from "./users.type";


class Users {
    public static usersDB: User[] = [
        new User('FIRST ADMIN','admin@000',createHash('admin000'),'ADMIN',v4(),[],true)
    ];

    get() {
        return Users.usersDB;
    }

    create(obj : User){
        Users.usersDB.push(obj);
    }

    update(approvedUsers : string[] ){
        for(let user of Users.usersDB)
        {
            if(approvedUsers.includes(user.id))
            {
                user.statusOfApproval = true;
            }
        }
    }

    updateAssignSchool(userId : string, schoolId : string){
        for(let user of Users.usersDB)
        {
            if(user.id === userId)
            {
                user.assignedSchools.push(schoolId);
            }
        }
    }
}

export const userSchema = new Users();

