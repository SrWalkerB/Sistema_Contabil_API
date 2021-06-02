import { Router } from 'express'
import CreateAccountingSystemControllers from '../useCases/CreateAccountingSystemUsers/CreateAccountingSystemControllers'

const usersAccountingSystemRoutes = Router()

usersAccountingSystemRoutes.post('/', CreateAccountingSystemControllers.store)

export default usersAccountingSystemRoutes
