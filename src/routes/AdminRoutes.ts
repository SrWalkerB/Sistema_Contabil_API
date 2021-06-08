import { Router } from 'express'
import { verifyUserMiddlware } from '../helpers/middlewares/VerifyUsersMiddlware'
import CreateUsersEmployees from '../implementations/Admin/CreateUsersEmployees'

const adminRoutes = Router()

adminRoutes.post('/employees',
  verifyUserMiddlware,
  CreateUsersEmployees.store
)

export default adminRoutes
