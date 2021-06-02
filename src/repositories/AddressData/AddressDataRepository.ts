import dbActions from '../../infra/connect'
import { ICreateAddress } from './IAddressData'

export default new class AddressDataRepository {
  async store (data: ICreateAddress) {
    return await dbActions('address').insert({
      id_address: data.idAddress,
      cep: data.cep,
      road: data.road,
      number: data.number,
      district: data.district,
      city: data.city,
      state: data.state,
      country: data.country
    })
  }
}()
