import dbActions from '../../infra/connect'
import { ICreateCompanyData } from './ICompanyData'

export default new class CompanyDataRepository {
  async store (data: ICreateCompanyData) {
    return await dbActions('data_company').insert({
      id_company: data.idCompany,
      name: data.name,
      cnpj: data.cnpj,
      id_responsible: data.idResponsible,
      id_address: data.idAddress
    })
  }
}()
