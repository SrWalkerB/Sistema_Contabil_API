import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

const validatorAuth = () => {
  return [
    body('email')
      .isEmail()
      .isLength({ max: 60 })
      .withMessage('insert email valid, max: 60 length'),

    body('password')
      .isLength({
        min: 8,
        max: 30
      })
      .withMessage('insert password valid, min: 8 and max: 60 length')
  ]
}

const validatorAuthErros = (req: Request, resp: Response, next: NextFunction) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const dataErros = errors.array().map(result => {
      return {
        param: result.param,
        message: result.msg
      }
    })

    return resp.status(400).json({
      message: `You has ${dataErros.length} errors`,
      body: dataErros
    })
  }

  next()
}

export {
  validatorAuth,
  validatorAuthErros
}
