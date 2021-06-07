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

  async findUserID (idUser: string) {
    return await
    dbActions('accounting_office_users')
      .where('id_user', idUser)
      .join('data_company', 'accounting_office_users.id_user', 'data_company.id_responsible')
      .join('address', 'data_company.id_address', 'address.id_address')
      .join('data_owner', 'accounting_office_users.id_user', 'data_owner.id_owner')
  }

  async findMailPassword (email: string) {
    return await dbActions('accounting_office_users')
      .where('email', email)
      .select('id_user')
      .select('password')
  }
}()
