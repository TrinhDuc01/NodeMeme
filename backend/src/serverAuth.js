import express from 'express'
import { config } from 'dotenv';

config();
const app = express();
const port = process.env.PORTAUTH || 3030
app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(port, () => {
    console.log(`Server authentication is running in port ${port}`)
})

