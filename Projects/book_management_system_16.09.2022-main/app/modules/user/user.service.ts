import { v4 } from "uuid";
import { sendEmail } from "../../utility/email";
import { AUTH_ERRORS } from "../auth/auth.responses";
import { userSchema } from "./user.schema";
import { User } from "./users.type";

export const getUser = () => {
    return userSchema.get()
}

export const getPendingUsers = () => {
    const users = userSchema.get();
    const pendingUsers = users.filter(x => x.statusOfApproval === false);
    if(pendingUsers.length === 0){
        throw AUTH_ERRORS.NO_USER;
    }
    return pendingUsers;
}

export const addUser = (obj :any) => {

    if(!userSchema.get().find(x => x.email === obj.email))
    {
        userSchema.create(new User(obj.name,obj.email,obj.password,'WORKER',v4(),[],false));
    }
    else{
        throw AUTH_ERRORS.USER_EXISTS;
    }

}

export const changeStatus = (approvedUsers : string[]) => {

    userSchema.update(approvedUsers);

    for(let user of userSchema.get())
    {
        if(approvedUsers.includes(user.id))
        {
            sendEmail(user.email, "CONGRATS YOU HAVE BEEN APPROVED", `
                Hi, ${user.name},

                You have been sucessfully approved for the position of WORKER.
                To check the school and their subjects that have been assigned to you.
                Please login on the below credentials: 

                email: ${user.email}
                password: ${user.password}
            `)
        }
        
    }

    return {
        statusCode : 204,
        message : 'USERS APPROVED SUCCESSFULLY'
    }
}