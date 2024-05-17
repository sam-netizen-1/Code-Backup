"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_service_1 = __importDefault(require("./message.service"));
const response_handler_1 = require("../../utility/response-handler");
const router = (0, express_1.Router)();
router.get('/show-all-users', (req, res, next) => {
    const loginUser = res.locals.username;
    const users = message_service_1.default.getAllUsers(loginUser);
    res.status(200).send(new response_handler_1.Response(users));
});
router.get('/show-all-messages/:username', (req, res, next) => {
    const loginUser = res.locals.username;
    const messages = message_service_1.default.getAllMessages(req.params.username, loginUser);
    res.status(200).send(new response_handler_1.Response(messages));
});
router.post('/send-message', (req, res, next) => {
    const loginUser = res.locals.username;
    const { receiver, message } = req.body;
    const sent = message_service_1.default.save(receiver, message, loginUser);
    res.status(201).send(new response_handler_1.Response(sent));
});
exports.default = router;
