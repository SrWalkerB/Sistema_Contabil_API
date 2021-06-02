import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

const ValidorCreateAccountingSystemUsers = () => {
  return [
    body('nameClient')
      .isLength({
        min: 3,
        max: 60
      })
      .withMessage('nameClient should has min: 3 and max: 60 length'),

    body('username')
      .isLength({
        min: 3,
        max: 30
      })
      .withMessage('username should has min: 3 and max: 30 length'),

    body('cpf')
      .isNumeric()
      .isLength({
        min: 11,
        max: 11
      })
      .withMessage('cpf should has 11 length'),

    body('email')
      .isEmail()
      .isLength({ max: 60 })
      .withMessage('invalid email'),

    body('password')
      .isLength({
        min: 8,
        max: 30
      })
      .withMessage('password should has min: 8 and max: 30 length'),

    body('nameCompany')
      .isLength({
        min: 3,
        max: 60
      })
      .withMessage('nameCompany should has min: 3 and max: 60 length'),

    body('cnpj')
      .isNumeric()
      .isLength({
        min: 11,
        max: 11
      })
      .withMessage('cnpj should has 11 length'),

    body('plane')
      .isLength({
        min: 4,
        max: 15
      })
      .withMessage('plane invalid'),

    body('cep')
      .isLength({
        min: 8,
        max: 8
      })
      .withMessage('cep should has 8 length'),

    body('road')
      .isLength({
        min: 5,
        max: 60
      })
      .withMessage('road should has min: 5 and max: 60 length'),

    body('number')
      .isLength({
        min: 1,
        max: 10
      })
      .withMessage('number should has min: 1 and max: 10 length'),

    body('district')
      .isLength({
        min: 5,
        max: 20
      })
      .withMessage('district should has min: 5 and max: 20 length'),

    body('city')
      .isLength({
        min: 5,
        max: 30
      })
      .withMessage('city should has min: 5 and max: 30 length'),

    body('state')
      .isLength({
        min: 5,
        max: 25
      })
      .withMessage('state should has min: 5 and max: 25 length'),

    body('country')
      .isLength({
        min: 5,
        max: 25
      })
      .withMessage('country should has min: 5 and max: 25 length')
  ]
}

const ValidatorErrosCreateAccountingSystemUsers = (req: Request, resp: Response, next: NextFunction) => {
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
  ValidorCreateAccountingSystemUsers,
  ValidatorErrosCreateAccountingSystemUsers
}
