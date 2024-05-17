import { REVIEW_MESSAGE } from "../restaurant/restaurant.constants";
import restaurantService from "../restaurant/restaurant.service";
import userSchema from "./user.schema";

const getAllReviews = (role: string, name: string, nameOfRestaurant: string = '') => {
    if(role == 'manager') {
        return restaurantService.getAllReviewsByManager(name);
    } else if(role == 'admin') {
        return restaurantService.getAllReviewsByAdmin();
    };
    throw REVIEW_MESSAGE.UNAUTHORIZED;
}

const getAllUsers = () => userSchema.get();
    

export default {
    getAllReviews,
    getAllUsers
}