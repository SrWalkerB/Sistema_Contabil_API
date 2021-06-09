import { Request, Response } from 'express'
import TokenOptions from '../../helpers/TokenOptions'
import CreateCompanyClientControllers from '../../useCases/company/CreateCompanyClient/CreateCompanyClientControllers'

export default new class CreateCompanyClient {
  async store (request: Request, response: Response) {
    const token = TokenOptions.getToken(request)
    try {
      const {
        nameCompany,
        corporateName,
        cnpj,
        phone,
        email,
        stateRegistry,
        municipalRegistry,
        legalNatural,
        beginDate,
        cnaePrimary,
        cnaeSecundary,
        nameClient,
        cpf
      } = request.body

      const data = await CreateCompanyClientControllers.store(token!, {
        nameClient,
        cpf,
        nameCompany,
        corporateName,
        cnpj,
        phone,
        email,
        stateRegistry,
        municipalRegistry,
        legalNatural,
        beginDate,
        cnaePrimary,
        cnaeSecundary
      })

      if (data.message !== 'success') {
        return response.status(422).json({ message: data.message })
      }

      return response.status(201).json(data)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ message: 'error not expect' })
    }
  }
}()
