import { Router } from 'express'
import AccountingSystemUsers from '../implementations/AccountingSystemUsers'
import {
  ValidorCreateAccountingSystemUsers,
  ValidatorErrosCreateAccountingSystemUsers
} from '../useCases/CreateAccountingSystemUsers/ValidatorCreateAccountingSystemUsers'

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
