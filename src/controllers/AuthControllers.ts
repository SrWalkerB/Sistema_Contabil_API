import { Request, Response } from 'express'

export default new class AuthControllers {
  async auth (req: Request, resp: Response) {
    try {
      return resp.status(200).json({ message: 'hello world' })
    } catch (error) {
      console.log(error)
      return resp.status(500).json({ message: 'expect not found' })
    }
  }
}()
