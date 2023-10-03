import { Router } from "express";

const route = Router();

export const initMemeRoute = (app) => {
    route.get('/', (req, res) => {
        return res.send('hehfe');
    })
    return app.use('/api/meme/', route);
}