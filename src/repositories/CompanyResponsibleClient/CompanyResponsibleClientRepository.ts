import dbActions from '../../infra/connect'
import { ICreateCompanyResponsibleClient } from './ICompanyResponsibleClient'

export default new class CompanyResponsibleClientRepository {
  async store (data: ICreateCompanyResponsibleClient) {
    return await dbActions('company_responsible_client')
      .insert({
        id_responsible_client: data.idResponsibleClient,
        name: data.name,
        cpf: data.cpf
      })
  }
}()
