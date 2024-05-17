import { Router } from "express";
import { Response } from "../../utility/response-handler";
import managerService from "./user.service";

export const UserRouter = Router();


UserRouter.get('/reviews', (req, res, next) => {
    try {
        const role  = res.locals.user.role as string;
        const name = res.locals.user.name;
        const result = managerService.getAllReviews(role, name);
        res.status(200).send(new Response(result));
    } catch (error) {
        next(error);
    }
});