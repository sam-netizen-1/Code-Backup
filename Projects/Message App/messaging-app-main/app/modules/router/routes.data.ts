import { Route, RouteData, Routes } from './routes.type';
import MessageRouter from '../message/message.route';
import AuthRouter from '../auth/auth.routes';

export const routes: Routes = [
    new Route('/auth', AuthRouter),
    new Route('/messenger', MessageRouter)
]

export const excludedRoutes: RouteData[] = [
    { url: "/auth/login", method: "POST" }
]
