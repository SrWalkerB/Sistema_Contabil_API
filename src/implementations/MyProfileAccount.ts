import { Request, Response } from 'express'

export default new class MyProfile {
  index (req: Request, resp: Response) {
    try {
      return resp.status(200).json({ message: 'profile' })
    } catch (error) {
      console.log(error)
      return resp.status(500).json({ message: 'error not expect' })
    }
  }
}()
