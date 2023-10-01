import express from 'express'
import { config } from 'dotenv';
import { initMemeRoute } from './routes/meme';
import cors from 'cors'
import { initAuthRoute } from './routes/authRoute';
config();
const app = express();
const port = process.env.PORTAUTH || 3030

app.use(express.json())
app.use(cors())

initMemeRoute(app)
initAuthRoute(app)

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(port, () => {
    console.log(`Server authentication is running in port ${port}`)
})

