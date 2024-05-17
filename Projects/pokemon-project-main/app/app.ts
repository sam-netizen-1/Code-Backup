import express from 'express';
import { registerRoutes } from './modules/router/routes.register';

export const startServer = () => {
    const app = express();

    registerRoutes(app);

    const { PORT } = process.env || 3000;
    app.listen(PORT, () => console.log(`SERVER IS LISTENING ON PORT:- ${PORT}`));
}