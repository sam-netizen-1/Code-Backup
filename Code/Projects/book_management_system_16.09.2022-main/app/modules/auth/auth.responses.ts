import { AuthResponses } from "./auth.types";

export const AUTH_ERRORS = {
    NOT_FOUND: new AuthResponses(404, "INVALID CREDENTIALS"),
    INTERNAL: new AuthResponses(500, "USER NOT CREATED"),
    USER_EXISTS : new AuthResponses(403,'USER ALREADY EXISTS'),
    NO_USER : new AuthResponses(404,'NO USERS ARE PENDING')
}