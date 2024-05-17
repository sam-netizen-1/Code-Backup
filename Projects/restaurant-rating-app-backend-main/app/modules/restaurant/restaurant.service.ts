import { REVIEW_MESSAGE } from "./restaurant.constants";
import restaurantSchema from "./restaurant.schema";
import { reviewsType } from "./restaurant.types";



const getAllRestaurants = () => restaurantSchema.getAllRestaurants();

const addReview = (nameOfRestaurant: string, rating: reviewsType) =>{ 
    const isAdded = restaurantSchema.addReview(nameOfRestaurant, rating);
    if(isAdded) {
        return REVIEW_MESSAGE.SUBMITTED;
    }
    throw REVIEW_MESSAGE.NOT_FOUND;
}

const getAllReviewsByAdmin = () => restaurantSchema.getAllReviewsByAdmin();

const getAllReviewsByManager = (name: string) => restaurantSchema.getAllReviewsByManager(name);


export default {
    getAllRestaurants,
    addReview,
    getAllReviewsByAdmin,
    getAllReviewsByManager
}
