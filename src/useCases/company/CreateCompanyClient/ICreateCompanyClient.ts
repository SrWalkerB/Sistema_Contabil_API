
interface ICreateCompanyClient {
    name: string,
    cpf: number,
    nameCompany: string,
    corporateName: string,
    cnpj: number,
    phone: number,
    email: string,
    stateRegistry: string,
    municipalRegistry: string,
    legalNatural: string,
    beginDate: Date,
    cnaePrimary: number,
    cnaeSecundary: number
}

export {
  ICreateCompanyClient
}
