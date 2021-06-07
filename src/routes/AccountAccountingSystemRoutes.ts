import { Router } from 'express'
import AccountingSystemUsers from '../implementations/AccountingSystemAccount'
import {
  ValidorCreateAccountingSystemUsers,
  ValidatorErrosCreateAccountingSystemUsers
} from '../useCases/CreateAccountingSystemAccount/ValidatorCreateAccountingSystemUsers'

import { validatorAuth, validatorAuthErros } from '../useCases/Auth/ValidatorAuth'
import MyProfileAccount from '../implementations/MyProfileAccount'
import { verifyUserMiddlware } from '../helpers/middlewares/VerifyUsersMiddlware'

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

usersAccountingSystemRoutes
  .get('/profile',
    verifyUserMiddlware,
    MyProfileAccount.index)

export default usersAccountingSystemRoutes
