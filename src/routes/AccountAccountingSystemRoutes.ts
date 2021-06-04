import { Router } from 'express'
import AccountingSystemUsers from '../implementations/AccountingSystemAccount'
import {
  ValidorCreateAccountingSystemUsers,
  ValidatorErrosCreateAccountingSystemUsers
} from '../useCases/CreateAccountingSystemAccount/ValidatorCreateAccountingSystemUsers'

import { validatorAuth, validatorAuthErros } from '../useCases/Auth/ValidatorAuth'

const usersAccountingSystemRoutes = Router()

usersAccountingSystemRoutes
  .post('/auth',
    validatorAuth(),
    validatorAuthErros,
    AccountingSystemUsers.login)

usersAccountingSystemRoutes
  .post('/',
    ValidorCreateAccountingSystemUsers(),
    ValidatorErrosCreateAccountingSystemUsers,
    AccountingSystemUsers.store
  )

export default usersAccountingSystemRoutes
