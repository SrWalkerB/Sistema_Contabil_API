import Cryptografia from '../../helpers/Cryptografia'
import AccountingOfficeUsersRepository from '../../repositories/AccountingOfficeUsersData/AccountingOfficeUsersRepository'

export default new class LoginSystemControllers {
  async auth (email: string, password: string) {
    const searchUser = await AccountingOfficeUsersRepository.findMailPassword(email)

    if (!searchUser.length) {
      return { message: 'user not found' }
    }

    const [{ password: passwordHash }] = searchUser
    const validatePassword = Cryptografia.compareHash(password, passwordHash)

    if (!validatePassword) {
      return { message: 'user not found' }
    }

    return { message: 'success', body: searchUser }
  }
}()
