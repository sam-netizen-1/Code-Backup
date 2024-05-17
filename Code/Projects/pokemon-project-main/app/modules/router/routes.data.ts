import { Route, Routes } from './routes.type';
import PokemonRouter from '../pokemon/pokemon.route';

export const routes: Routes = [
    new Route('/pokemon', PokemonRouter)
]