import { Request, Response } from 'express'
import AuthControllers from '../useCases/Auth/AuthControllers'
import CreateAccountingSystemControllers from '../useCases/CreateAccountingSystemUsers/CreateAccountingSystemControllers'

export default new class AccountingSystemUsers {
  async login (req: Request, resp: Response) {
    try {
      const { email, password } = req.body
      const auth = await AuthControllers.auth(email, password)

      if (auth.message !== 'success') {
        return resp.status(404).json({ message: auth.message })
      }

      return resp.status(200).json(auth)
    } catch (error) {
      console.log(error)
      return resp.status(500).json({ message: 'err not expect' })
    }
  }

  async store (req: Request, resp: Response) {
    try {
      const {
        nameClient,
        username,
        cpf,
        email,
        password,
        nameCompany,
        cnpj,
        plane,
        cep,
        road,
        number,
        district,
        city,
        state,
        country
      } = req.body

      const createAccount = await CreateAccountingSystemControllers.store({
        createAccountingClient: {
          cpf,
          username,
          email,
          name: nameClient,
          password,
          plane
        },
        createAccountingCompany: {
          cnpj,
          name: nameCompany,
          plane
        },
        createAccountingAddress: {
          cep,
          city,
          country,
          district,
          number,
          road,
          state
        }
      })

      return resp.status(201).json(createAccount)
    } catch (error) {
      console.log(error)
      return resp.status(500).json({ message: 'error not expect' })
    }
  }
}()
