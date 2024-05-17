"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForDuplicate = exports.checkAttack = exports.validator = exports.body = void 0;
const pokemon_constant_1 = require("../modules/pokemon/pokemon.constant");
const pokemon_schema_1 = __importDefault(require("../modules/pokemon/pokemon.schema"));
const response_handler_1 = require("./response-handler");
const validationMiddleware = (key) => {
    return (req, res, next) => {
        const value = req.body[key];
        if (!value) {
            const error = `${key} is missing!`;
            res.locals = Object.assign(Object.assign({}, res.locals), { [key]: error });
        }
        next();
    };
};
const body = (key) => validationMiddleware(key);
exports.body = body;
const validator = (req, res, next) => {
    if (Object.keys(res.locals).length) {
        return res.status(404).send(new response_handler_1.Response(null, { message: res.locals }));
    }
    next();
};
exports.validator = validator;
const checkAttack = (req, res, next) => {
    if (req.body.attacks.length >= 3) {
        return next();
    }
    next(pokemon_constant_1.POKEMON_MESSAGE.CHECK_ATTACKS);
};
exports.checkAttack = checkAttack;
const checkForDuplicate = (req, res, next) => {
    for (let pokemon of pokemon_schema_1.default.pokemons) {
        if (pokemon.name.toLowerCase() === req.body.name.toLowerCase()) {
            return next(pokemon_constant_1.POKEMON_MESSAGE.CHECK_DUPLICATE);
        }
    }
    next();
};
exports.checkForDuplicate = checkForDuplicate;
