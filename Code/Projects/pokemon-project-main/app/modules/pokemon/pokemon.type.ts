export interface IPokemon {
    id: string,
    name: string;
    type: string;
    evolution_cycle: string;
    weakness: string,
    attacks: string[],
    img_url: string
}

export class PokemonResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}
