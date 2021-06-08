import { Router } from 'express'
import CreateCompanyClient from '../implementations/CompanyClient/CreateCompanyClient'

const companyClient = Router()

companyClient.post('/company', CreateCompanyClient.store)

export default companyClient
