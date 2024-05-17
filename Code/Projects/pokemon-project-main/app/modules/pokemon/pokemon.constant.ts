import { PokemonResponse } from "./pokemon.type";

export const POKEMON_MESSAGE = {
    NOT_FOUND: new PokemonResponse(404, "POKEMON NOT FOUND"),
    EMPTY: new PokemonResponse(200, "EMPTY DATABASE"),
    POKEMON_CREATED: new PokemonResponse(201, "POKEMON CREATED"),
    POKEMON_DELETED: new PokemonResponse(200, "POKEMON DELETED"),
    CHECK_DUPLICATE: new PokemonResponse(404, "PLEASE ADD UNIQUE POKEMON"),
    CHECK_ATTACKS: new PokemonResponse(404, "PLEASE PROVIDE AT LEAST 3 ATTACKS")
}
