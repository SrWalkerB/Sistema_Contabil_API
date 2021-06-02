import { ICreateAccountingSystemDTO } from './ICreateAccountingSystemDTO'

export default new class CreateAccountingSystemControllers {
  store (data: ICreateAccountingSystemDTO) {
    return { message: data }
  }
}()
