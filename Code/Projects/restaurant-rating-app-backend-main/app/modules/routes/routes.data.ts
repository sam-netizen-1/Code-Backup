import { AuthRouter } from '../auth/auth.routes';
import { RestaurantRouter } from '../restaurant/restaurant.routes'
import { UserRouter } from '../user/user.routes';
import { ExcludedType, Route, Routes } from './routes.type';

export const routes: Routes = [
    new Route('/restaurants', RestaurantRouter),
    new Route('/auth', AuthRouter),
    new Route('/user', UserRouter)
]

export const excludedRoutes: ExcludedType[] = [
    new ExcludedType('/auth/', 'POST'),
    new ExcludedType('/restaurants/', 'GET'),
    new ExcludedType('/restaurants/', 'POST')
]
