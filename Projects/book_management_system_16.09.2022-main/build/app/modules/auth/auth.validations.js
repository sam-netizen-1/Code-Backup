"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.SignupValidator = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage("NAME REQUIRED"),
    (0, express_validator_1.body)('email').isEmail().withMessage('EMAIL REQUIRED'),
    (0, express_validator_1.body)('password').isString().notEmpty().isLength({ min: 6 }).withMessage("PASSWORD INVALID"),
    validate_1.validate
];
//# sourceMappingURL=auth.validations.js.map