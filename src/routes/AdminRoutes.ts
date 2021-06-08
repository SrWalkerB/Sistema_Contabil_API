import { Router } from 'express'
import { AuthorizationAdmin } from '../helpers/middlewares/AuthorizationAdmin'
import { verifyUserMiddlware } from '../helpers/middlewares/VerifyUsersMiddlware'
import CreateUsersEmployees from '../implementations/Admin/CreateUsersEmployees'

const adminRoutes = Router()

adminRoutes
  .post('/employees',
    verifyUserMiddlware,
    AuthorizationAdmin,
    CreateUsersEmployees.store
  )

export default adminRoutes
