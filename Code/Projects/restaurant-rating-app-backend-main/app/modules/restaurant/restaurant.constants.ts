import { RestaurantResponse } from "./restaurant.types"

export const REVIEW_MESSAGE = {
    NOT_FOUND: new RestaurantResponse(404, "RESTAURANT NOT FOUND"),
    UNAUTHORIZED: new RestaurantResponse(401, "UNAUTHORIZED"),
    SUBMITTED: new RestaurantResponse(201, "RATING IS SUBMITTED"),
    NO_REVIEWS: new RestaurantResponse(404, "NO REVIEWS FOUND")
}
