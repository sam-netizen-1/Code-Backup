import { Router } from 'express';
import { Response } from '../../utility/response-handler';
import { MESSAGES } from '../message/message.constant';
import messageSchema from '../message/message.schema';
import jwt from 'jsonwebtoken';

const router = Router();

// login
router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    const user  = messageSchema.users.find(user => user.username === username && user.password === password)
    if(user) {
        const jwtSecretKey = process.env.JWT_SECRET_KEY as string;
        const data = { time: Date(), username: user.username}   
        const token = jwt.sign(data, jwtSecretKey);

        return res.status(200).send(new Response({token: token, message: `WELCOME ${data.username}!`}));     
    }
    
    next(MESSAGES.AUTHENTICATION_FAILED);
});

// logout
router.get('/logout', (req, res, next) => {
    return res.status(200).send(new Response({message: 'LOGOUT SUCCESSFULLY!'}));
});

export default router;