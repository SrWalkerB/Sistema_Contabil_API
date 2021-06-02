import dbActions from '../../infra/connect'
import { ICreateOwnerData } from './IOwnerData'

export default new class OwnerDataRepository {
  async store (data: ICreateOwnerData) {
    return await dbActions('data_owner').insert({
      id_owner: data.idOwner,
      id_email: data.idEmail,
      cpf: data.cpf,
      id_address: data.idAddress,
      plane: data.plane
    })
  }
}()
