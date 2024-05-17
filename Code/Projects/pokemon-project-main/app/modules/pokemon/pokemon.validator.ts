import { body, validator, checkAttack, checkForDuplicate } from "../../utility/validators";

export const CreatePokemonValidator = [
    checkForDuplicate,
    body('name'),
    body('type'),
    body('evolution_cycle'),
    body('weakness'),
    body('attacks'),
    body('img_url'),
    validator,
    checkAttack
];