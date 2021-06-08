import dotenv from 'dotenv'
import express from 'express'
import usersAccountingSystemRoutes from './routes/AccountAccountingSystemRoutes'
import adminRoutes from './routes/AdminRoutes'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/account', usersAccountingSystemRoutes)

app.use('/admin', adminRoutes)

export default app
