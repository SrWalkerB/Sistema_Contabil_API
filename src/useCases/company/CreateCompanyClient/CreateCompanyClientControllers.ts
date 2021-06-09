import { parse } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'
// import TokenOptions from '../../../helpers/TokenOptions'
import CompanyClientRepository from '../../../repositories/AccountingCompanyClientData/CompanyClientRepository'
import { ICreateCompanyClient } from './ICreateCompanyClient'

export default new class CreateCompanyClientControllers {
  async store (token: string, data: ICreateCompanyClient) {
    const searchCnpj = await CompanyClientRepository.findCnpj(data.cnpj)
    // const { body: { data: idUser } } = TokenOptions.verifyToken(token)

    if (searchCnpj.length) {
      return { message: 'company already create' }
    }

    const company = {
      idUser: uuidv4(),
      idResponsible: uuidv4(),
      idAddress: '',
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

    /* await CompanyClientRepository.store({
      beginDate: company.beginDate,
      cnaePrimary: company.cnaePrimary,
      cnaeSecudary: company.cnaeSecudary,
      cnpj: company.cnpj,
      corporateName: company.corporateName,
      email: company.email,
      idCompany: company.idUser,
      idResponsible: company.idResponsible,
      legalNatural: company.legalNatural,
      municipalRegistry: company.municipalRegistry,
      name: company.name,
      phone: company.phone,
      stateRegistry: company.stateRegistry,
      idAdresss: company.idAddress
    })
 */
    return { message: 'success', body: company }
  }
}()
