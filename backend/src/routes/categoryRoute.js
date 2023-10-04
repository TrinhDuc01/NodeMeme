import { Router } from "express";
import categoryController from "../controllers/categoryController";

const route = Router();

export const initCategoryRoute = (app) => {
    route.post('/create',categoryController.createCategory);
    route.post('/update/:id',categoryController.getUpdateCategory);
    route.post('/update',categoryController.updateCategory);
    
    return app.use('/api/category', route);
}