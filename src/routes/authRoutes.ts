import { Router } from 'express'
import AuthControllers from '../controllers/AuthControllers'

const authRoutes = Router()

authRoutes.post('/', AuthControllers.auth)

export default authRoutes
