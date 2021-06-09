import dbActions from '../../infra/connect'
import { ICreateEmployeesRepository } from './IEmployees'

export default new class EmployeesRepository {
  async store (data: ICreateEmployeesRepository) {
    return await dbActions('employees')
      .insert({
        id_employees: data.idEmployees,
        id_company: data.idCompany,
        id_user: data.idUser
      })
  }

  async findUserCompany (idUser: string) {
    return await dbActions('employees')
      .where('id_user', idUser)
      .select('id_company')
  }
}()
