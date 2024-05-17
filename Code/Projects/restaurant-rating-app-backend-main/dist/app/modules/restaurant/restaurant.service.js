"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_constants_1 = require("./restaurant.constants");
const restaurant_schema_1 = __importDefault(require("./restaurant.schema"));
const getAllRestaurants = () => restaurant_schema_1.default.getAllRestaurants();
const addReview = (nameOfRestaurant, rating) => {
    const isAdded = restaurant_schema_1.default.addReview(nameOfRestaurant, rating);
    if (isAdded) {
        return restaurant_constants_1.REVIEW_MESSAGE.SUBMITTED;
    }
    throw restaurant_constants_1.REVIEW_MESSAGE.NOT_FOUND;
};
const getAllReviewsByAdmin = () => restaurant_schema_1.default.getAllReviewsByAdmin();
const getAllReviewsByManager = (name) => restaurant_schema_1.default.getAllReviewsByManager(name);
exports.default = {
    getAllRestaurants,
    addReview,
    getAllReviewsByAdmin,
    getAllReviewsByManager
};
