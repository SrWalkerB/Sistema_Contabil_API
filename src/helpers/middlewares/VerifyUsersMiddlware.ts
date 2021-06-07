import { Request, Response, NextFunction } from 'express'
import AccountingOfficeUsersRepository from '../../repositories/AccountingOfficeUsersData/AccountingOfficeUsersRepository'
import TokenOptions from '../TokenOptions'

const verifyUserMiddlware = async (req: Request, resp: Response, next: NextFunction) => {
  const token = TokenOptions.getToken(req)
  const { body: { data: idUser } } = TokenOptions.verifyToken(token!)
  const seachId = await AccountingOfficeUsersRepository.findVerifyID(idUser)

  if (!seachId.length) {
    return resp.status(404).json({ message: 'user not found' })
  }

  next()
}

export { verifyUserMiddlware }
