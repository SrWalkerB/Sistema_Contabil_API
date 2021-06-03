import { Router } from 'express'
import AccountingSystemUsers from '../implementations/AccountingSystemUsers'
import {
  ValidorCreateAccountingSystemUsers,
  ValidatorErrosCreateAccountingSystemUsers
} from '../useCases/CreateAccountingSystemUsers/ValidatorCreateAccountingSystemUsers'

const usersAccountingSystemRoutes = Router()

usersAccountingSystemRoutes.post('/auth', AccountingSystemUsers.login)

usersAccountingSystemRoutes.post('/',
  ValidorCreateAccountingSystemUsers(),
  ValidatorErrosCreateAccountingSystemUsers,
  AccountingSystemUsers.store
)

export default usersAccountingSystemRoutes
