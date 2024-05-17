import { IExcludedPaths } from "../../utility/authorize";
import { AuthRouter } from "../auth/auth.routes";
import { DummyRouter } from "../dummy/dummy.routes";
import { schoolRouter } from "../school/school.routes";
// import { userRouter } from "../user/user.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
    new Route("/dummy", DummyRouter),
    new Route("/school", schoolRouter),
    // new Route("/user", userRouter),
    new Route("/auth", AuthRouter)
];

export const excludedPaths: IExcludedPaths[] = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/signup', method: "POST" }
]