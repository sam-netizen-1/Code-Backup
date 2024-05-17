import { createToken } from "../../utility/authorize";
import { sendEmail } from "../../utility/email";
import { comparePassword, createHash } from "../../utility/password";
import { ResponseHandler } from "../../utility/response-handler";
import { addUser, getUser } from "../user/user.service";
import { AUTH_ERRORS } from "./auth.responses";
import { AuthResponses, ICredentials } from "./auth.types";


export const login = (credentials: ICredentials) => {
    const users = getUser();

    const user = users.find(
        u =>
            u.email === credentials.email &&
            comparePassword(credentials.password, u.password)
    );

    if (!user) {
        throw AUTH_ERRORS.NOT_FOUND
    }

    const token = createToken({ id: user.id, role: user.role });

    return {
        token,
        statusCode : 200,
        message : 'SUCCESSFULLY LOGGED IN!',
        role: user.role
    };
}

export const signup = (user: any) => {
    try {
        const originalPassword = user.password;
        user.password = createHash(originalPassword);
        addUser(user);

        return {
            statusCode : 200,
            message : 'USER ADDED SUCCESSFULLY'
        };

    } catch (e) {
        throw e;
    }

}
