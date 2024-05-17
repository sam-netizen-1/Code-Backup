"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REVIEW_MESSAGE = void 0;
const restaurant_types_1 = require("./restaurant.types");
exports.REVIEW_MESSAGE = {
    NOT_FOUND: new restaurant_types_1.RestaurantResponse(404, "RESTAURANT NOT FOUND"),
    UNAUTHORIZED: new restaurant_types_1.RestaurantResponse(401, "UNAUTHORIZED"),
    SUBMITTED: new restaurant_types_1.RestaurantResponse(201, "RATING IS SUBMITTED"),
    NO_REVIEWS: new restaurant_types_1.RestaurantResponse(404, "NO REVIEWS FOUND")
};
