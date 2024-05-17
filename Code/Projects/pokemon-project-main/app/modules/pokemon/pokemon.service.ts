import pokemonSchema from "./pokemon.schema";
import { IPokemon } from "./pokemon.type";
import { POKEMON_MESSAGE } from "./pokemon.constant";

const create = (pokemon: IPokemon) => {
    const status = pokemonSchema.create(pokemon);
    if(status) return POKEMON_MESSAGE.POKEMON_CREATED;
    
    throw POKEMON_MESSAGE.NOT_FOUND;
};

const getOne = () => {
    const result = pokemonSchema.getOne();
    if(result) {
        return result;
    } 
    throw POKEMON_MESSAGE.EMPTY;
}


const deleteOne = (id: string) => {
    const result = pokemonSchema.deleteOne(id);
    if (result) {
        return POKEMON_MESSAGE.POKEMON_DELETED;
    }

    throw POKEMON_MESSAGE.NOT_FOUND;
}

export default {
    create,
    getOne,
    deleteOne
}
