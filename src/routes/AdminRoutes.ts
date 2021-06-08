import { Router } from 'express'
import { AuthorizationAdmin } from '../helpers/middlewares/AuthorizationAdmin'
import { verifyUserMiddlware } from '../helpers/middlewares/VerifyUsersMiddlware'
import CreateUsersEmployees from '../implementations/Admin/CreateUsersEmployees'
import { ErrosValidatorCreateEmployees, ValidatorCreateEmployees } from '../useCases/Admin/CreateUsersEmployees/ValidatorCreateEmployees'

const adminRoutes = Router()

adminRoutes
  .post('/employees',
    ValidatorCreateEmployees(),
    ErrosValidatorCreateEmployees,
    verifyUserMiddlware,
    AuthorizationAdmin,
    CreateUsersEmployees.store
  )

export default adminRoutes
