import dbActions from '../infra/connect'

export default new class AccountingOfficeUsers {
  async index () {
    return await dbActions('accounting_office_users').select('*')
  }
}()
