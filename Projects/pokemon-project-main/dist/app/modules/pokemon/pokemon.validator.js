"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePokemonValidator = void 0;
const validators_1 = require("../../utility/validators");
exports.CreatePokemonValidator = [
    validators_1.checkForDuplicate,
    (0, validators_1.body)('name'),
    (0, validators_1.body)('type'),
    (0, validators_1.body)('evolution_cycle'),
    (0, validators_1.body)('weakness'),
    (0, validators_1.body)('attacks'),
    (0, validators_1.body)('img_url'),
    validators_1.validator,
    validators_1.checkAttack
];
