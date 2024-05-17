import express from 'express';
import { registerRoutes } from './modules/routes/routes.register';

export const startServer = () => {
    const app = express();
    
    registerRoutes(app);
    
    const { PORT } = process.env;
    app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
}