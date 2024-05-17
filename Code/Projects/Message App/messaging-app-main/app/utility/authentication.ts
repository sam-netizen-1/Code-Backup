import { NextFunction, Request, Response } from "express";
import { MESSAGES } from "../modules/message/message.constant";
import messageSchema from "../modules/message/message.schema";
import { Response as ResponseHandler } from "./response-handler";
import jwt from 'jsonwebtoken';


export const authentication = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    for (let user of messageSchema.users) {
        if (username === user.username && password === user.password) {
            let jwtSecretKey = process.env.JWT_SECRET_KEY as string;
            let data = {
                    time: Date(),
                    username: user.username,
            }   
 
            const token = jwt.sign(data, jwtSecretKey);
            return res.status(200).send(new ResponseHandler({token: token, message: `WELCOME ${data.username}!`}));
        } 
    } 
    next(MESSAGES.AUTHENTICATION_FAILED);
}

export const authorization = (req: Request, res: Response, next: NextFunction) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY as string;
  
    const token = req.headers.authorization as string;  
 
    const verified = jwt.verify(token, jwtSecretKey);
    res.locals = verified as Object;
    if(verified){
        return next();
    }

    next(MESSAGES.AUTHENTICATION_FAILED);
}      