import { Request, Response, NextFunction } from 'express'
import AccountingOfficeUsersRepository from '../../repositories/AccountingOfficeUsersData/AccountingOfficeUsersRepository'
import TokenOptions from '../TokenOptions'

async function AuthorizationAdmin (request: Request, response: Response, next: NextFunction) {
  const token = TokenOptions.getToken(request)
  if (!token) {
    return response.status(401)
  }

  const { body: { data: idUser } } = TokenOptions.verifyToken(token!)
  const [{ type }] = await AccountingOfficeUsersRepository.findVerifyID(idUser)

  if (type !== 'owner') {
    return response.status(403)
  }

  next()
}

export { AuthorizationAdmin }
