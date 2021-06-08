import { Request, Response } from 'express'
import CreateCompanyClientControllers from '../../useCases/company/CreateCompanyClient/CreateCompanyClientControllers'

export default new class CreateCompanyClient {
  store (request: Request, response: Response) {
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
        name,
        cpf
      } = request.body

      const data = CreateCompanyClientControllers.store({
        name,
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

      return response.status(201).json(data.message)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ message: 'error not expect' })
    }
  }
}()
