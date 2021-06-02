import { Router } from 'express'
import AccountingSystemUsers from '../implementations/AccountingSystemUsers'

const usersAccountingSystemRoutes = Router()

usersAccountingSystemRoutes.post('/', AccountingSystemUsers.store)

export default usersAccountingSystemRoutes
