import { Router } from "express";

export class Route {
    constructor(
        public path: string,
        public router: Router
    ) { }
}

export type Routes = Route[];

export type RouteData = {
    url: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
}