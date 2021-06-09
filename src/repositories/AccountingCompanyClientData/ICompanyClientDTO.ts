interface ICreateCompanyClientDTO{
    idCompany: string,
    idResponsible: string,
    idCompanyResponsible: string,
    name: string,
    corporateName: string,
    cnpj: number,
    phone: number,
    email: string,
    stateRegistry: number,
    municipalRegistry: number,
    legalNatural: number,
    beginDate: Date,
    cnaePrimary: number,
    cnaeSecudary: number,
}

export {
  ICreateCompanyClientDTO
}
