"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const restaurant_service_1 = __importDefault(require("./restaurant.service"));
exports.RestaurantRouter = (0, express_1.Router)();
exports.RestaurantRouter.get('/', (req, res, next) => {
    const restaurantsList = restaurant_service_1.default.getAllRestaurants();
    res.status(200).send(new response_handler_1.Response(restaurantsList));
});
exports.RestaurantRouter.post('/', (req, res, next) => {
    try {
        const _a = req.body, { nameOfRestaurant } = _a, review = __rest(_a, ["nameOfRestaurant"]);
        const result = restaurant_service_1.default.addReview(nameOfRestaurant, review);
        res.status(200).send(new response_handler_1.Response(result));
    }
    catch (error) {
        next(error);
    }
});
