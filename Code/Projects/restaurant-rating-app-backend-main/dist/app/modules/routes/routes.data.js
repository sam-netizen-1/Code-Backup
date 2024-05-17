"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedRoutes = exports.routes = void 0;
const auth_routes_1 = require("../auth/auth.routes");
const restaurant_routes_1 = require("../restaurant/restaurant.routes");
const user_routes_1 = require("../user/user.routes");
const routes_type_1 = require("./routes.type");
exports.routes = [
    new routes_type_1.Route('/restaurants', restaurant_routes_1.RestaurantRouter),
    new routes_type_1.Route('/auth', auth_routes_1.AuthRouter),
    new routes_type_1.Route('/user', user_routes_1.UserRouter)
];
exports.excludedRoutes = [
    new routes_type_1.ExcludedType('/auth/', 'POST'),
    new routes_type_1.ExcludedType('/restaurants/', 'GET'),
    new routes_type_1.ExcludedType('/restaurants/', 'POST')
];
