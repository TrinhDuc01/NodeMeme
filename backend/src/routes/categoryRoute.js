import { Router } from "express";
import categoryController from "../controllers/categoryController";
import authMiddleware from "../middleware/authMiddleware";

const route = Router();

export const initCategoryRoute = (app) => {
    route.post('/create', authMiddleware.verifyTokenAndAdminAuth, categoryController.createCategory);
    route.post('/get-update', authMiddleware.verifyTokenAndAdminAuth, categoryController.getUpdateCategory);
    route.post('/update', authMiddleware.verifyTokenAndAdminAuth, categoryController.updateCategory);
    route.post('/get-all', categoryController.getAllCategory);

    return app.use('/api/category', route);
}