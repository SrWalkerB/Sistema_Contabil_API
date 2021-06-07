import TokenOptions from '../../helpers/TokenOptions'
import AccountingOfficeUsersRepository from '../../repositories/AccountingOfficeUsersData/AccountingOfficeUsersRepository'

export default new class MyProfileControllers {
  async index (token: string) {
    const { body: { data: idUser } } = TokenOptions.verifyToken(token)
    const dataUser = await AccountingOfficeUsersRepository.findUserID(idUser)

    return { message: dataUser }
  }
}()
