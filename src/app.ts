import dotenv from 'dotenv'
import express from 'express'
import usersAccountingSystemRoutes from './routes/usersAccountingSystem'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/user', usersAccountingSystemRoutes)

export default app
