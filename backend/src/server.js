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
    
    res.send('token')
})

app.listen(port, () => {
    console.log(`Server authentication is running in port ${port}`)
})

