import { NextFunction, Request, Response } from "express";
import { RouteData } from "../modules/router/routes.type";
import jwt from 'jsonwebtoken';


export const authorization = (excludedRoutes: RouteData[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if(excludedRoutes.find(route => route.url === req.url && route.method === req.method)) {
                return next();
            }

            const jwtSecretKey = process.env.JWT_SECRET_KEY as string;
            const token = req.headers.authorization as string;  
            const verified = jwt.verify(token, jwtSecretKey);

            res.locals = verified as Object;   
            next();
        } catch (e) {
            next(e);
        }
    }
}
   