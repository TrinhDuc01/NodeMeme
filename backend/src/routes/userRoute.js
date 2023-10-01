import { Router } from "express";
import userController from "../controllers/userController";
const route = Router();

export const initUserRoute = (app) => {
    route.post('/login', userController.login);
    route.post('/sign-up', userController.signUp);

    return app.use('/api/user', route);
}