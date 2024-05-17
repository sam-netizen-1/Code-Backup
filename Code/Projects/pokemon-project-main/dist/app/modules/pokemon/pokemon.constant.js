"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POKEMON_MESSAGE = void 0;
const pokemon_type_1 = require("./pokemon.type");
exports.POKEMON_MESSAGE = {
    NOT_FOUND: new pokemon_type_1.PokemonResponse(404, "POKEMON NOT FOUND"),
    EMPTY: new pokemon_type_1.PokemonResponse(200, "EMPTY DATABASE"),
    POKEMON_CREATED: new pokemon_type_1.PokemonResponse(201, "POKEMON CREATED"),
    POKEMON_DELETED: new pokemon_type_1.PokemonResponse(200, "POKEMON DELETED"),
    CHECK_DUPLICATE: new pokemon_type_1.PokemonResponse(404, "PLEASE ADD UNIQUE POKEMON"),
    CHECK_ATTACKS: new pokemon_type_1.PokemonResponse(404, "PLEASE PROVIDE AT LEAST 3 ATTACKS")
};
