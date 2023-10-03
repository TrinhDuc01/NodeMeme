import { Router } from "express";
import authController from '../controllers/authController'
const route = Router();

export const initAuthRoute = (app) => {
    route.post('/login', authController.login);
    route.post('/refresh-token', authController.refreshToken);

    return app.use('/api/auth', route);
}