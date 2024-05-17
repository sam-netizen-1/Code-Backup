"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_constants_1 = require("../restaurant/restaurant.constants");
const restaurant_service_1 = __importDefault(require("../restaurant/restaurant.service"));
const user_schema_1 = __importDefault(require("./user.schema"));
const getAllReviews = (role, name, nameOfRestaurant = '') => {
    if (role == 'manager') {
        return restaurant_service_1.default.getAllReviewsByManager(name);
    }
    else if (role == 'admin') {
        return restaurant_service_1.default.getAllReviewsByAdmin();
    }
    ;
    throw restaurant_constants_1.REVIEW_MESSAGE.UNAUTHORIZED;
};
const getAllUsers = () => user_schema_1.default.get();
exports.default = {
    getAllReviews,
    getAllUsers
};
