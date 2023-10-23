import { Router } from "express";
import memeController from "../controllers/memeController";
import upload from "../upload/fileUpload";

const route = Router();

export const initMemeRoute = (app) => {
    route.get('/', (req, res) => {
        return res.send('hehfe');
    });

    route.post('/create',upload.single('meme'), memeController.createMeme);

    return app.use('/api/meme', route);
}