import Cryptografia from '../../helpers/Cryptografia'
import TokenOptions from '../../helpers/TokenOptions'
import AccountingOfficeUsersRepository from '../../repositories/AccountingOfficeUsersData/AccountingOfficeUsersRepository'

export default new class LoginSystemControllers {
  async auth (email: string, password: string) {
    const searchUser = await AccountingOfficeUsersRepository.findMail(email)

    if (!searchUser.length) {
      return { message: 'user not found' }
    }

    const [{ password: passwordHash, id_user: idUser }] = searchUser
    const validatePassword = Cryptografia.compareHash(password, passwordHash)

    if (!validatePassword) {
      return { message: 'user not found' }
    }

    const token = TokenOptions.genereteToken(idUser)
    return { message: 'success', token: token }
  }
}()
