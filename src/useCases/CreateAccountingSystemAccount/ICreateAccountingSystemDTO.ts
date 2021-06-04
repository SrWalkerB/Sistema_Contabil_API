interface ICreateAccountingSystemClient{
    name: string,
    username: string,
    plane: string,
    cpf: number,
    email: string,
    password: string
}

interface ICreateAccountingSystemCompany{
    name: string,
    cnpj: number,
    plane: string
}

interface ICreateAccountAddress{
    cep: number,
    road: string,
    number: string,
    district: string,
    city: string,
    state: string,
    country: string
}

interface ICreateAccountingSystemDTO{
    createAccountingClient: ICreateAccountingSystemClient,
    createAccountingCompany: ICreateAccountingSystemCompany,
    createAccountingAddress: ICreateAccountAddress
}

export {
  ICreateAccountingSystemDTO
}
