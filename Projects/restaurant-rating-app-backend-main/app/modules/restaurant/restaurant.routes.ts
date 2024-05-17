import { Router } from 'express';
import { Response } from '../../utility/response-handler';
import restaurantService from './restaurant.service';


export const RestaurantRouter = Router();

RestaurantRouter.get('/', (req, res, next) => {
    const restaurantsList = restaurantService.getAllRestaurants();
    res.status(200).send(new Response(restaurantsList));
});

RestaurantRouter.post('/', (req, res, next) => {
    try {
        const { nameOfRestaurant, ...review } = req.body;
        const result = restaurantService.addReview(nameOfRestaurant, review);
        res.status(200).send(new Response(result));
    } catch (error) {
        next(error);
    }
})
