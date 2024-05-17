import { NextFunction, Request, Router, Response as EResponse } from "express";
import pokemonService from "./pokemon.service";
import { IPokemon } from "./pokemon.type";
import { CreatePokemonValidator } from "./pokemon.validator";

const router = Router();

router.get('/',(req, res, next) => {
    try {
        const result = pokemonService.getOne();
        next(result);
    } catch (e) {
        next(e);
    }
});

router.post('/', CreatePokemonValidator,(req: Request, res: EResponse, next: NextFunction) => {
    try {
        console.log(req.body);
        const result = pokemonService.create(req.body as IPokemon);
        next(result);
    } catch (e) {
        next(e);
    }
});


router.delete('/:id',(req, res, next) => {
    try {
        const result = pokemonService.deleteOne(req.params.id);
        next(result);
    } catch (e) {
        next(e);
    }
});

export default router;