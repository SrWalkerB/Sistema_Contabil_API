import { Request, Response } from 'express'

export default new class CreateAccountingSystemControllers {
  store (req: Request, resp: Response) {
    try {
      return resp.status(201).send()
    } catch (error) {
      console.log(error)
      return resp.status(500).json({ message: 'err not expect' })
    }
  }
}()
