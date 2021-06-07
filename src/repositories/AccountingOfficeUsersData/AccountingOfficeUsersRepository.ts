import dbActions from '../../infra/connect'
import { ICreateAccountingSystemUsersData } from './IAccountingOfficeUsersData'

export default new class AccountingOfficeUsers {
  async store (data: ICreateAccountingSystemUsersData) {
    return await dbActions('accounting_office_users').insert({
      id_user: data.idUser,
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      type: data.type
    })
  }

  async findMailPassword (email: string) {
    return await dbActions('accounting_office_users')
      .where('email', email)
      .select('id_user')
      .select('password')
  }
}()
