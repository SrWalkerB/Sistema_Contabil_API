import { Router } from 'express'
import CreateCompanyClient from '../implementations/CompanyClient/CreateCompanyClient'
import { ValidatorCreateCompanyClient, ValidatorErrosCreateCompanyClient } from '../useCases/company/CreateCompanyClient/ValidatorCreateCompanyClient'

const companyClient = Router()

companyClient.post('/company',
  ValidatorCreateCompanyClient(),
  ValidatorErrosCreateCompanyClient,
  CreateCompanyClient.store)

export default companyClient
