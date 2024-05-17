import { NextFunction, Request, Response } from "express"
import { POKEMON_MESSAGE } from "../modules/pokemon/pokemon.constant";
import pokemonSchema from "../modules/pokemon/pokemon.schema";
import { Response as ResponseHandler } from "./response-handler";

const validationMiddleware = (key: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const value = req.body[key];
        
        if(!value) {
            const error = `${key} is missing!`;
            
            res.locals = {...res.locals, [key]: error};
        } 
        next();
    }
}

export const body = (key: string) => validationMiddleware(key);


export const validator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(Object.keys(res.locals).length) {
        return res.status(404).send(new ResponseHandler(null, { message: res.locals }));
    }
    next();
} 

export const checkAttack = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(req.body.attacks.length>=3) {
        return next();
    }
    next(POKEMON_MESSAGE.CHECK_ATTACKS);
}

export const checkForDuplicate = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    for(let pokemon of pokemonSchema.pokemons) {
        if(pokemon.name.toLowerCase() === req.body.name.toLowerCase()) {
            return next(POKEMON_MESSAGE.CHECK_DUPLICATE);
        }
    }
    next();
}