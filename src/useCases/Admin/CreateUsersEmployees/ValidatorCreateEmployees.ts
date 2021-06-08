import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

const ValidatorCreateEmployees = () => {
  return [
    body('name')
      .isLength({
        min: 3,
        max: 60
      })
      .withMessage('name should has min: 3 and max: 60 length'),

    body('username')
      .isLength({
        min: 3,
        max: 30
      })
      .withMessage('username should has min: 3 and max: 30 length'),

    body('email')
      .isEmail()
      .isLength({ max: 60 })
      .withMessage('invalid email'),

    body('password')
      .isLength({
        min: 8,
        max: 30
      })
      .withMessage('password should has min: 8 and max: 30 length')
  ]
}

const ErrosValidatorCreateEmployees = (req: Request, resp: Response, next: NextFunction) => {
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
  ValidatorCreateEmployees,
  ErrosValidatorCreateEmployees
}
