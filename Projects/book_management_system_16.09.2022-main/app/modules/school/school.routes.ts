import  {Request, Response, NextFunction, Router} from 'express';
import { permit } from '../../utility/authorize';
import { ResponseHandler } from '../../utility/response-handler';
import { USER_ROLE } from '../user/user.constants';
import { addSchool, addSubject, assignSchool, checkSubject, deleteSchool, getAssignedSchools, getOneSchool, getSchools } from './school.service';

export const schoolRouter = Router();
 
// <------------------- ADMIN ROUTES ----------------->

schoolRouter.get("/get-schools", permit([USER_ROLE.ADMIN]) ,(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = getSchools();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

schoolRouter.get("/:id", permit([USER_ROLE.ADMIN]) ,(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = getOneSchool(req.params.id);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

schoolRouter.post("/add-schools", permit([USER_ROLE.ADMIN]) ,(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = addSchool(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

schoolRouter.put("/delete-school/:id", permit([USER_ROLE.ADMIN]) ,(req: Request, res: Response, next: NextFunction) => {
    const schoolID = req.params.id;
    try {
        const result = deleteSchool(schoolID);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

schoolRouter.post("/add-subject", permit([USER_ROLE.ADMIN]) ,(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = addSubject(req.body.id,req.body.subject,req.body.classes);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

schoolRouter.post("/assign-school", permit([USER_ROLE.ADMIN]) ,(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = assignSchool(req.body.userId,req.body.schoolId);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

// <----------  WORKER ROUTES --------------->

schoolRouter.get("/:id", permit([USER_ROLE.WORKER]) ,(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = getAssignedSchools(req.params.id);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

schoolRouter.put("/check-subject", permit([USER_ROLE.WORKER]) ,(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = checkSubject(req.body.id,req.body.subject,req.body.classes);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})