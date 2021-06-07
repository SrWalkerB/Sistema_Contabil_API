import { Request, Response } from 'express'
import TokenOptions from '../helpers/TokenOptions'
import MyProfileControllers from '../useCases/MyProfile/MyProfileControllers'

export default new class MyProfile {
  async index (req: Request, resp: Response) {
    try {
      const token = TokenOptions.getToken(req)
      const data = await MyProfileControllers.index(token!)

      return resp.status(200).json(data.message)
    } catch (error) {
      console.log(error)
      return resp.status(500).json({ message: 'error not expect' })
    }
  }
}()
