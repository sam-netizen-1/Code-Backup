import { IPokemon } from "./pokemon.type";
import { v4 } from 'uuid';

class PokemonSchema {
    pokemons: IPokemon[] = [];

    create(pokemon: IPokemon) {       
        this.pokemons.push({ ...pokemon, id: v4() });
        return true;
    }

    getOne() {
        const randomIndex = Math.floor(Math.random()* this.pokemons.length);
        return this.pokemons[randomIndex];
    }

    deleteOne(id: string) {
        const assetIndex = this.pokemons.findIndex(p => p.id == id);

        if (assetIndex !== -1) {
            this.pokemons.splice(assetIndex, 1);
            return true;
        }

        return false;
    }
}

const pokemonSchema = new PokemonSchema();

export default pokemonSchema;