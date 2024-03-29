import { v4 as uuidv4 } from 'uuid'
import Cryptografia from '../../helpers/Cryptografia'
import AccountingOfficeUsersRepository from '../../repositories/AccountingOfficeUsersData/AccountingOfficeUsersRepository'
import AddressDataRepository from '../../repositories/AddressData/AddressDataRepository'
import CompanyDataRepository from '../../repositories/CompanyData/CompanyDataRepository'
import EmployeesRepository from '../../repositories/EmployeesData/EmployeesRepository'
import OwnerDataRepository from '../../repositories/OwnerData/OwnerDataRepository'
import { ICreateAccountingSystemDTO } from './ICreateAccountingSystemDTO'

export default new class CreateAccountingSystemControllers {
  async store (data: ICreateAccountingSystemDTO) {
    const searchFields = await this.searchFieldStore(
      data.createAccountingClient.email,
      data.createAccountingClient.username,
      data.createAccountingCompany.cnpj
    )

    if (searchFields) {
      return { message: searchFields }
    }

    const officeUsers = {
      idUser: uuidv4(),
      idEmployee: uuidv4(),
      name: data.createAccountingClient.name,
      username: data.createAccountingClient.username,
      cpf: data.createAccountingClient.cpf,
      email: data.createAccountingClient.email,
      password: Cryptografia.genereteHash(data.createAccountingClient.password),
      plane: data.createAccountingClient.plane,
      type: 'owner'
    }

    const address = {
      idAddress: uuidv4(),
      cep: data.createAccountingAddress.cep,
      road: data.createAccountingAddress.road,
      number: data.createAccountingAddress.number,
      district: data.createAccountingAddress.district,
      city: data.createAccountingAddress.city,
      state: data.createAccountingAddress.state,
      country: data.createAccountingAddress.country
    }

    const company = {
      idCompany: uuidv4(),
      idReponsible: officeUsers.idUser,
      idAddress: address.idAddress,
      name: data.createAccountingCompany.name,
      cnpj: data.createAccountingCompany.cnpj
    }

    const owner = {
      idOwner: officeUsers.idUser,
      idEmail: officeUsers.email,
      cpf: officeUsers.cpf,
      plane: officeUsers.plane,
      idAddress: address.idAddress
    }

    await AccountingOfficeUsersRepository
      .store({
        idUser: officeUsers.idUser,
        name: officeUsers.name,
        username: officeUsers.username,
        email: officeUsers.email,
        password: officeUsers.password,
        type: officeUsers.type
      })

    await AddressDataRepository
      .store({
        idAddress: address.idAddress,
        cep: address.cep,
        city: address.city,
        country: address.country,
        district: address.district,
        number: address.number,
        road: address.road,
        state: address.state
      })

    await OwnerDataRepository
      .store({
        idOwner: owner.idOwner,
        idEmail: owner.idEmail,
        cpf: owner.cpf,
        idAddress: owner.idAddress,
        plane: owner.plane
      })

    await CompanyDataRepository
      .store({
        idCompany: company.idCompany,
        name: company.name,
        cnpj: company.cnpj,
        idResponsible: officeUsers.idUser,
        idAddress: company.idAddress
      })

    await EmployeesRepository.store({
      idEmployees: officeUsers.idEmployee,
      idCompany: company.idCompany,
      idUser: officeUsers.idUser
    })

    return {
      message: 'success',
      body: [
        officeUsers,
        address,
        owner,
        company
      ]
    }
  }

  private async searchFieldStore (email: string, username: string, cnpj: number) {
    const searchMail = await AccountingOfficeUsersRepository.findMail(email)
    const searchUsername = await AccountingOfficeUsersRepository.findUsername(username)
    const searchCnpj = await CompanyDataRepository.findCnpj(cnpj)
    const erros = []

    if (searchMail.length) {
      erros.push('email already created')
    }

    if (searchUsername.length) {
      erros.push('username already created')
    }

    if (searchCnpj.length) {
      erros.push('cnpj already created')
    }

    if (erros.length) {
      return {
        message: `You have ${erros.length} errors`,
        body: erros
      }
    }
  }
}()
