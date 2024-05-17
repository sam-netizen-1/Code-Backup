"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const auth_routes_1 = require("../auth/auth.routes");
const dummy_routes_1 = require("../dummy/dummy.routes");
const school_routes_1 = require("../school/school.routes");
const user_routes_1 = require("../user/user.routes");
const routes_types_1 = require("./routes.types");
exports.routes = [
    new routes_types_1.Route("/dummy", dummy_routes_1.DummyRouter),
    new routes_types_1.Route("/school", school_routes_1.schoolRouter),
    new routes_types_1.Route("/user", user_routes_1.userRouter),
    new routes_types_1.Route("/auth", auth_routes_1.AuthRouter)
];
exports.excludedPaths = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/signup', method: "POST" }
];
//# sourceMappingURL=routes.data.js.map