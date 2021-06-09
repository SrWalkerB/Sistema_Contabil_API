import { parse } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'
import TokenOptions from '../../../helpers/TokenOptions'
import CompanyClientRepository from '../../../repositories/AccountingCompanyClientData/CompanyClientRepository'
import CompanyResponsibleClientRepository from '../../../repositories/CompanyResponsibleClient/CompanyResponsibleClientRepository'
import EmployeesRepository from '../../../repositories/EmployeesData/EmployeesRepository'
import { ICreateCompanyClient } from './ICreateCompanyClient'

export default new class CreateCompanyClientControllers {
  async store (token: string, data: ICreateCompanyClient) {
    const searchCnpj = await CompanyClientRepository.findCnpj(data.cnpj)
    const { body: { data: idUser } } = TokenOptions.verifyToken(token)
    const [{ id_company: idCompanyResponsible }] = await EmployeesRepository.findUserCompany(idUser)

    if (searchCnpj.length) {
      return { message: 'company already create' }
    }

    const userResponsible = {
      idResponsibleClient: uuidv4(),
      name: data.nameClient,
      cpf: data.cpf
    }

    const company = {
      idUser: uuidv4(),
      idResponsible: userResponsible.idResponsibleClient,
      idCompanyResponsible: idCompanyResponsible,
      name: data.nameCompany,
      corporateName: data.corporateName,
      phone: data.phone,
      stateRegistry: data.stateRegistry,
      legalNatural: data.legalNatural,
      municipalRegistry: data.municipalRegistry,
      beginDate: parse(data.beginDate, 'dd/MM/yyyy', new Date()),
      cnaePrimary: data.cnaePrimary,
      cnaeSecudary: data.cnaeSecundary,
      cnpj: data.cnpj,
      email: data.email
    }

    await CompanyResponsibleClientRepository
      .store({
        idResponsibleClient: userResponsible.idResponsibleClient,
        cpf: userResponsible.cpf,
        name: userResponsible.name
      })

    await CompanyClientRepository
      .store({
        idCompany: company.idUser,
        idCompanyResponsible: company.idCompanyResponsible,
        beginDate: company.beginDate,
        cnaePrimary: company.cnaePrimary,
        cnaeSecudary: company.cnaeSecudary,
        cnpj: company.cnpj,
        corporateName: company.corporateName,
        email: company.email,
        idResponsible: company.idResponsible,
        legalNatural: company.legalNatural,
        municipalRegistry: company.municipalRegistry,
        name: company.name,
        phone: company.phone,
        stateRegistry: company.stateRegistry
      })

    return { message: 'success', body: company }
  }
}()
