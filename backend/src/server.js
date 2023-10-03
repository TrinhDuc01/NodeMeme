import express from 'express'
import { config } from 'dotenv';
import { initMemeRoute } from './routes/meme';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { initAuthRoute } from './routes/authRoute';
import { initUserRoute } from './routes/userRoute';
config();
const app = express();
const port = process.env.PORTAUTH || 3030

app.use(express.json())
app.use(cors())
app.use(cookieParser())

initMemeRoute(app)
initAuthRoute(app)
initUserRoute(app)

app.get('/', (req, res) => {
    // res.cookie('myCookie', 'Hello, World!', { maxAge: 3600000*24*30*12 }); // maxAge được tính bằng miligiây
  res.send('Cookie đã được thiết lập.');
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})