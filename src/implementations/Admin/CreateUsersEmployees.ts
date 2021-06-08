import { Request, Response } from 'express'
import TokenOptions from '../../helpers/TokenOptions'
import CreateUsersEmployeesControllers from '../../useCases/Admin/CreateUsersEmployees/CreateUsersEmployeesControllers'

export default new class CreateUsersEmployees {
  async store (request: Request, response: Response) {
    try {
      const token = TokenOptions.getToken(request)
      const {
        name,
        username,
        email,
        password
      } = request.body

      const data = await CreateUsersEmployeesControllers.store(token!, {
        name,
        username,
        email,
        password
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
