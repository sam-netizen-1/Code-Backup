"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class PokemonSchema {
    constructor() {
        this.pokemons = [];
    }
    create(pokemon) {
        this.pokemons.push(Object.assign(Object.assign({}, pokemon), { id: (0, uuid_1.v4)() }));
        return true;
    }
    getOne() {
        const randomIndex = Math.floor(Math.random() * this.pokemons.length);
        return this.pokemons[randomIndex];
    }
    deleteOne(id) {
        const assetIndex = this.pokemons.findIndex(p => p.id == id);
        if (assetIndex !== -1) {
            this.pokemons.splice(assetIndex, 1);
            return true;
        }
        return false;
    }
}
const pokemonSchema = new PokemonSchema();
exports.default = pokemonSchema;
