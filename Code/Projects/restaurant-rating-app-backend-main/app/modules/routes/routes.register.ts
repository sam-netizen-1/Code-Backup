import { Application, json, NextFunction, Request, Response } from "express";
import { authorization } from "../../utility/authorization";
import { Response as ResponseHandler } from "../../utility/response-handler";
import { excludedRoutes, routes } from "./routes.data";
import cors from 'cors';

export const registerRoutes = (app: Application) => {
    app.use(cors());
    app.use(json());
    
    app.use(authorization(excludedRoutes));

    for (let route of routes) {
        app.use(route.path, route.router);
    }

    app.use((response: any, req: Request, res: Response, next: NextFunction) => {
        res.status(response.statusCode || 500).send(new ResponseHandler(null, response));
    })

}