"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_schema_1 = __importDefault(require("./pokemon.schema"));
const pokemon_constant_1 = require("./pokemon.constant");
const create = (pokemon) => {
    const status = pokemon_schema_1.default.create(pokemon);
    if (status)
        return pokemon_constant_1.POKEMON_MESSAGE.POKEMON_CREATED;
    throw pokemon_constant_1.POKEMON_MESSAGE.NOT_FOUND;
};
const getOne = () => {
    const result = pokemon_schema_1.default.getOne();
    if (result) {
        return result;
    }
    throw pokemon_constant_1.POKEMON_MESSAGE.EMPTY;
};
const deleteOne = (id) => {
    const result = pokemon_schema_1.default.deleteOne(id);
    if (result) {
        return pokemon_constant_1.POKEMON_MESSAGE.POKEMON_DELETED;
    }
    throw pokemon_constant_1.POKEMON_MESSAGE.NOT_FOUND;
};
exports.default = {
    create,
    getOne,
    deleteOne
};
