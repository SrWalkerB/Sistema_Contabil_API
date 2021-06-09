import dbActions from '../../infra/connect'
import { ICreateCompanyClientDTO } from './ICompanyClientDTO'

export default new class CompanyClientRepository {
  async store (data: ICreateCompanyClientDTO) {
    return await dbActions('accounting_company_client').insert({
      id_company: data.idCompany,
      id_responsible: data.idResponsible,
      id_accounting_company: data.idCompanyResponsible,
      name: data.name,
      corporate_name: data.corporateName,
      cnpj: data.cnpj,
      phone: data.phone,
      email: data.email,
      state_registry: data.stateRegistry,
      municipal_registry: data.municipalRegistry,
      legal_natural: data.legalNatural,
      begin_date: data.beginDate,
      cnae_primary: data.cnaePrimary,
      cnae_secundary: data.cnaeSecudary
    })
  }

  async findCnpj (cnpj: number) {
    return await dbActions('accounting_company_client')
      .where('cnpj', cnpj)
  }
}()
