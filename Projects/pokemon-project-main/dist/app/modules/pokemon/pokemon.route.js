"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_service_1 = __importDefault(require("./pokemon.service"));
const pokemon_validator_1 = require("./pokemon.validator");
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    try {
        const result = pokemon_service_1.default.getOne();
        next(result);
    }
    catch (e) {
        next(e);
    }
});
router.post('/', pokemon_validator_1.CreatePokemonValidator, (req, res, next) => {
    try {
        console.log(req.body);
        const result = pokemon_service_1.default.create(req.body);
        next(result);
    }
    catch (e) {
        next(e);
    }
});
router.delete('/:id', (req, res, next) => {
    try {
        const result = pokemon_service_1.default.deleteOne(req.params.id);
        next(result);
    }
    catch (e) {
        next(e);
    }
});
exports.default = router;
