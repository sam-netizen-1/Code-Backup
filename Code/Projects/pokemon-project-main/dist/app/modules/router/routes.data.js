"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes_type_1 = require("./routes.type");
const pokemon_route_1 = __importDefault(require("../pokemon/pokemon.route"));
exports.routes = [
    new routes_type_1.Route('/pokemon', pokemon_route_1.default)
];
