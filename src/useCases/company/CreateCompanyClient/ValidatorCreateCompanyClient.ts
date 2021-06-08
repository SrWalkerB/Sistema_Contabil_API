import { isValid, parse } from 'date-fns'
import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

const ValidatorCreateCompanyClient = () => {
  return [
    body('name_company')
      .isLength({ min: 3, max: 60 })
      .withMessage('name need has min: 3 and max: 60'),

    body('corporate_name')
      .isLength({ min: 3, max: 120 })
      .withMessage('corporate_name need has min: 3 and max: 120'),

    body('cnpj')
      .isLength({ min: 11, max: 11 })
      .withMessage('cnpj need has 11 length'),

    body('cpf')
      .isNumeric()
      .isLength({ min: 11, max: 11 })
      .withMessage('cpf need has 11 length'),

    body('phone')
      .isNumeric()
      .isLength({ min: 11, max: 11 })
      .withMessage('phone need has 11 length'),

    body('email')
      .isEmail()
      .withMessage('email invalid'),

    body('state_registry')
      .isNumeric()
      .isLength({ min: 15, max: 15 })
      .withMessage('state_registry need has 15 length'),

    body('municipal_registry')
      .isNumeric()
      .isLength({ min: 15, max: 15 })
      .withMessage('municipal_registry need has 15 length'),

    body('legal_natural')
      .isNumeric()
      .isLength({ min: 4, max: 4 })
      .withMessage('legal_natural has need 4 length'),

    body('begin_date')
      .custom((value) => {
        const result = isValid(parse(value, 'dd/MM/yyyy', new Date()))
        return !!result
      })
      .withMessage('invalid_date'),

    body('cnae_primary')
      .isNumeric()
      .isLength({ min: 7, max: 7 })
      .withMessage('cnae_primary need has 7 length'),

    body('cnae_secundary')
      .isNumeric()
      .isLength({ min: 7, max: 7 })
      .withMessage('cnae_secundary need has 7 length')
  ]
}

const ValidatorErrosCreateCompanyClient = (req: Request, resp: Response, next: NextFunction) => {
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
  ValidatorCreateCompanyClient,
  ValidatorErrosCreateCompanyClient
}
