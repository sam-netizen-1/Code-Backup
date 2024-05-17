import { Router } from "express";
import { Response } from "../../utility/response-handler";
import authService from "./auth.service";

export const AuthRouter = Router();

AuthRouter.post('/', (req, res, next) => {
    try {
        const { username, password } = req.body;
        const result = authService.login(username, password);
        res.send(new Response(result));
    } catch (error) {
        next(error);
    }
})

AuthRouter.get('/', (req, res, next) => {
    res.status(200).send(new Response({ message: 'LOGOUT SUCCESSFULLY!' }));
})