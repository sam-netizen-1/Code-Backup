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
Object.defineProperty(exports, "__esModule", { value: true });
class RestaurantSchema {
    constructor() {
        this.restaurants = [
            {
                id: "1",
                nameOfRestaurant: "Blue Leaf",
                address: "Kothrud Pune",
                managerName: "Akshay Kasar",
                reviews: [
                    {
                        name: "Abhishek",
                        Food: 4,
                        Ambience: 3,
                        Service: 4,
                        Cleanliness: 4,
                        Overall: 5,
                    },
                    {
                        name: "Rahul",
                        Food: 4,
                        Ambience: 3,
                        Service: 4,
                        Cleanliness: 4,
                        Overall: 5,
                    },
                ],
            },
            {
                id: "2",
                nameOfRestaurant: "White Leaf",
                address: "VimanNagar Pune",
                managerName: "Shubham",
                reviews: [
                    {
                        name: "Ankit",
                        Food: 4,
                        Ambience: 2,
                        Service: 1,
                        Cleanliness: 2,
                        Overall: 3,
                    },
                    {
                        name: "Rocky",
                        Food: 5,
                        Ambience: 4,
                        Service: 1,
                        Cleanliness: 2,
                        Overall: 4,
                    },
                ],
            },
            {
                id: "3",
                nameOfRestaurant: "FML",
                address: "FC Road Pune",
                managerName: "Shantanu",
                reviews: [
                    {
                        name: "Rani",
                        Food: 2,
                        Ambience: 2,
                        Service: 1,
                        Cleanliness: 2,
                        Overall: 3,
                    },
                    {
                        name: "Raj",
                        Food: 5,
                        Ambience: 4,
                        Service: 1,
                        Cleanliness: 1,
                        Overall: 4,
                    },
                ],
            },
            {
                id: "4",
                nameOfRestaurant: "Reddy's House",
                address: "Deccan Pune",
                managerName: "Raj",
                reviews: [
                    {
                        name: "Anurag",
                        Food: 4,
                        Ambience: 1,
                        Service: 1,
                        Cleanliness: 2,
                        Overall: 3,
                    },
                    {
                        name: "Rahul",
                        Food: 5,
                        Ambience: 3,
                        Service: 1,
                        Cleanliness: 2,
                        Overall: 4,
                    },
                ],
            },
            {
                id: "5",
                nameOfRestaurant: "Surve's",
                address: "Aundh Pune",
                managerName: "Mahesh",
                reviews: [
                    {
                        name: "Akhil",
                        Food: 3,
                        Ambience: 2,
                        Service: 1,
                        Cleanliness: 2,
                        Overall: 3,
                    },
                    {
                        name: "Rajiv",
                        Food: 3,
                        Ambience: 4,
                        Service: 1,
                        Cleanliness: 2,
                        Overall: 4,
                    },
                ],
            },
            {
                id: "6",
                nameOfRestaurant: "Curry Leaves",
                address: "Hinjawadi Pune",
                managerName: "Sarthak",
                reviews: [
                    {
                        name: "Sarang",
                        Food: 2,
                        Ambience: 2,
                        Service: 1,
                        Cleanliness: 2,
                        Overall: 3,
                    },
                    {
                        name: "Akshay",
                        Food: 2,
                        Ambience: 4,
                        Service: 1,
                        Cleanliness: 2,
                        Overall: 4,
                    },
                ],
            },
        ];
    }
    getAllRestaurants() {
        return this.restaurants.map((restaurant) => ({
            id: restaurant.id,
            name: restaurant.nameOfRestaurant,
            address: restaurant.address,
        }));
    }
    addReview(nameOfRestaurant, review) {
        const restaurantIndex = this.restaurants.findIndex((restaurant) => restaurant.nameOfRestaurant == nameOfRestaurant);
        if (restaurantIndex >= 0) {
            return this.restaurants[restaurantIndex].reviews.push(review);
        }
        return false;
    }
    getAllReviewsByManager(managerName) {
        const restaurantReview = this.restaurants.find((restaurant) => restaurant.managerName == managerName);
        if (restaurantReview) {
            let reviewersNamedAndAvg = [];
            for (let review of restaurantReview.reviews) {
                const { name } = review, ratings = __rest(review, ["name"]);
                reviewersNamedAndAvg.push(Object.assign(Object.assign({ name: name }, ratings), { average: this.getAvg(ratings) }));
            }
            return reviewersNamedAndAvg;
        }
        return false;
    }
    getAllReviewsByAdmin() {
        let restaurantNameAndAvg = [];
        for (let restaurant of this.restaurants) {
            let sum = 0;
            const count = restaurant.reviews.length;
            for (let review of restaurant.reviews) {
                const { name } = review, ratings = __rest(review, ["name"]);
                sum += this.getAvg(ratings);
            }
            restaurantNameAndAvg.push({
                id: restaurant.id,
                name: restaurant.nameOfRestaurant,
                address: restaurant.address,
                reviews: restaurant.reviews,
                average: +(sum / count).toFixed(2),
            });
        }
        let sum = 0;
        for (let restaurant of restaurantNameAndAvg) {
            const { id, name, address, reviews } = restaurant, ratings = __rest(restaurant, ["id", "name", "address", "reviews"]);
            sum += this.getAvg(ratings);
        }
        return {
            OverallAverage: +(sum / restaurantNameAndAvg.length).toFixed(2),
            restaurantAverage: restaurantNameAndAvg,
        };
    }
    getAvg(ratings) {
        const ratingArray = Object.entries(ratings).map((rate) => rate[1]);
        const sum = ratingArray.reduce((avg, curr) => (avg += curr));
        return +(sum / ratingArray.length).toFixed(2);
    }
}
const restaurantSchema = new RestaurantSchema();
exports.default = restaurantSchema;
