import { Request, Response } from 'express'

export default new class CreateCompanyClient {
  store (request: Request, response: Response) {
    try {
      return response.status(201).json({ message: 'hello world' })
    } catch (error) {
      console.error(error)
      return response.status(500).json({ message: 'error not expect' })
    }
  }
}()
