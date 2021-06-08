import TokenOptions from '../../../helpers/TokenOptions'
import { ICreateEmployees } from './IUsersEmployees'

export default new class CreateUsersEmployeesControllers {
  store (token: string, data: ICreateEmployees) {
    const { body } = TokenOptions.verifyToken(token)

    console.log(body)

    return { message: 'hello world' }
  }
}()
