import AccountingOfficeUsersRepository from '../../repositories/AccountingOfficeUsersData/AccountingOfficeUsersRepository'

export default new class LoginSystemControllers {
  async auth (email: string, password: string) {
    const searchUser = await AccountingOfficeUsersRepository.findUser(email, password)

    if (!searchUser.length) {
      return { message: 'user not found' }
    }

    return { message: 'success', body: searchUser }
  }
}()
