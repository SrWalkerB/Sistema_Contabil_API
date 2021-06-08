import { ICreateCompanyClient } from './ICreateCompanyClient'

export default new class CreateCompanyClientControllers {
  store (data: ICreateCompanyClient) {
    return { message: data }
  }
}()
