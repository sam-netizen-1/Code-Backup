import  {Request, Response, NextFunction, Router} from 'express';
import { permit } from '../../utility/authorize';
import { ResponseHandler } from '../../utility/response-handler';
import { USER_ROLE } from '../user/user.constants';
import { changeStatus, getPendingUsers } from '../user/user.service';
import { login, signup } from './auth.service';
import { SignupValidator } from './auth.validations';

export const AuthRouter = Router();

AuthRouter.post("/login", (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = login(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

AuthRouter.post("/signup", SignupValidator, (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = signup(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

AuthRouter.get('/pending-approvals',permit([USER_ROLE.ADMIN]),(req, res, next) => {

    try {
        const result = getPendingUsers();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

AuthRouter.post('/change-status',permit([USER_ROLE.ADMIN]), (req, res, next) => {
    const approvedUsers = req.body;
    try {
        console.log(req.body)
        const result = changeStatus(approvedUsers);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

