import { creatToken } from "../../utility/authorization";
import userService from "../user/user.service";

const login = (username: string, password: string) => {
    const users = userService.getAllUsers();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        const token = creatToken(user);
        return {role: user.role, token: token, message: `WELCOME ${user.role} - ${user.name}!`};
    }

    throw {statusCode: 404, message: 'USER NOT FOUND!'};
}

export default {
    login
}