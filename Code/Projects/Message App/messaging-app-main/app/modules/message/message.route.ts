import { Router } from "express";
import messageService from "./message.service";
import { Response } from '../../utility/response-handler'
import { authorization } from "../../utility/authorization";

const router = Router();

router.get('/show-all-users', (req, res, next) => {
    const loginUser = res.locals.username;
    const users = messageService.getAllUsers(loginUser);
    res.status(200).send(new Response(users));
});

router.get('/show-all-messages/:username', (req, res, next) => {
    const loginUser = res.locals.username;
    const messages = messageService.getAllMessages(req.params.username, loginUser);
    res.status(200).send(new Response(messages));
});

router.post('/send-message', (req, res, next) => {
    const loginUser = res.locals.username;
    const { receiver, message } = req.body;
    const sent = messageService.save(receiver, message, loginUser);
    res.status(201).send(new Response(sent));
});


export default router;