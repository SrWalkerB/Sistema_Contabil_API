import dbActions from '../../infra/connect'
import { ICreateEmployees } from './IEmployees'

export default new class EmployeesRepository {
  async store (data: ICreateEmployees) {
    return await dbActions('employees')
      .insert({
        id_employees: data.idEmployees,
        id_company: data.idCompany,
        id_user: data.idUser
      })
  }
}()
