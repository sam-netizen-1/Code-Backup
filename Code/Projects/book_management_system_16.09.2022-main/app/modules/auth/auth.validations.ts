import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const SignupValidator = [
    body('name').isString().notEmpty().withMessage("NAME REQUIRED"),
    body('email').isEmail().withMessage('EMAIL REQUIRED'),
    body('password').isString().notEmpty().isLength({ min: 6 }).withMessage("PASSWORD INVALID"),
    validate
]