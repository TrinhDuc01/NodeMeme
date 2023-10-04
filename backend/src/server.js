import express from 'express'
import { config } from 'dotenv';
import { initMemeRoute } from './routes/memeRoute';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { initAuthRoute } from './routes/authRoute';
import { initUserRoute } from './routes/userRoute';
import { initCategoryRoute } from './routes/categoryRoute';
config();
const app = express();
const port = process.env.PORTAUTH || 3030
const urlFrontend = process.env.URLFRONTEND || 'http://localhost:3000'

app.use(express.json())

app.use(cors({
  origin: urlFrontend,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Cho phép gửi cookie
}));

app.use(cookieParser())

initMemeRoute(app)
initAuthRoute(app)
initUserRoute(app)
initCategoryRoute(app)

app.get('/', (req, res) => {
  // res.cookie('myCookie', 'Hello, World!', { maxAge: 3600000*24*30*12 }); // maxAge được tính bằng miligiây
  res.send('Cookie đã được thiết lập.');
})

app.listen(port, () => {
  console.log(`Server is running in port ${port}`)
})