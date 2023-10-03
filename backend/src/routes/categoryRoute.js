import { Router } from "express";
import categoryController from "../controllers/categoryController";

const route = Router();

export const initCategoryRoute = (app) => {
    route.post('/create',categoryController.createCategory);
    
    return app.use('/api/category', route);
}