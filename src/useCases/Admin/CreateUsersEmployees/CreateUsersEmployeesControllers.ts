import { v4 as uuidv4 } from 'uuid'
import Cryptografia from '../../../helpers/Cryptografia'
import TokenOptions from '../../../helpers/TokenOptions'
import AccountingOfficeUsersRepository from '../../../repositories/AccountingOfficeUsersData/AccountingOfficeUsersRepository'
import CompanyDataRepository from '../../../repositories/CompanyData/CompanyDataRepository'
import EmployeesRepository from '../../../repositories/EmployeesData/EmployeesRepository'
import { ICreateEmployees } from './IUsersEmployees'

export default new class CreateUsersEmployeesControllers {
  async store (token: string, data: ICreateEmployees) {
    const { body: { data: idUser } } = TokenOptions.verifyToken(token)
    const [{ id_company: idCompany }] = await CompanyDataRepository.findCompanyResponsible(idUser)
    const searchEmployeeMail = await AccountingOfficeUsersRepository.findMail(data.email)

    if (searchEmployeeMail.length) {
      return { message: 'employee already create' }
    }

    const employees = {
      idUser: uuidv4(),
      idEmployeer: uuidv4(),
      idCompany: idCompany,
      name: data.name,
      username: data.username,
      email: data.email,
      password: Cryptografia.genereteHash(data.password),
      type: 'employees'
    }

    await AccountingOfficeUsersRepository.store({
      idUser: employees.idUser,
      name: employees.name,
      username: employees.username,
      email: employees.email,
      password: employees.password,
      type: employees.type
    })

    await EmployeesRepository.store({
      idEmployees: employees.idEmployeer,
      idUser: employees.idUser,
      idCompany: employees.idCompany
    })

    return { message: 'success', body: employees }
  }
}()
