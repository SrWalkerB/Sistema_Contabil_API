import dotenv from 'dotenv'
import express from 'express'
import usersAccountingSystemRoutes from './routes/AccountAccountingSystemRoutes'
import adminRoutes from './routes/AdminRoutes'
import companyClient from './routes/CompanyClient'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/account', usersAccountingSystemRoutes)

app.use('/admin', adminRoutes)

app.use('/client', companyClient)

export default app
