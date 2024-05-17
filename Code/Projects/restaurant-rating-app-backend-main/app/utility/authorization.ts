import { NextFunction, Request, Response as EResponse } from "express";
import { ExcludedType } from "../modules/routes/routes.type";
import jwt  from "jsonwebtoken";


export const creatToken = (payload: any) => {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    const token = jwt.sign(payload, secretKey);
    return token;
}

export const verifyToken = (token: string) => {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    const payload = jwt.verify(token, secretKey);
    return payload;
}


export const authorization = (ExcludedRoutes: ExcludedType[]) => {
    return (req: Request, res: EResponse, next: NextFunction) => {
        try {
            if(ExcludedRoutes.find(ERoutes => ERoutes.path == req.url && ERoutes.method == req.method)) {
                return next();
            }
            
            const token = req.headers.authorization as string;
            const payload = verifyToken(token);
            res.locals.user = payload;
            
            return next();
        } catch (error) {
            next(error);
        }
     }
}