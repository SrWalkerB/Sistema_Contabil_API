import dotenv from 'dotenv'
import express from 'express'
import usersAccountingSystemRoutes from './routes/AccountAccountingSystemRoutes'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/account', usersAccountingSystemRoutes)

export default app
