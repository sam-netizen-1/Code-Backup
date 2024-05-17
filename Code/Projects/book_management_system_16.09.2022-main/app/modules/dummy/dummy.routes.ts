import  {Request, Response, NextFunction, Router} from 'express';
import { ResponseHandler } from '../../utility/response-handler';
import dummyService from './dummy.service';

export const DummyRouter = Router();

DummyRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = dummyService.dummyGet();
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})