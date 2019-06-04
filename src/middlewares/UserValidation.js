import _ from 'lodash'
import Joi from '@hapi/joi'

export async function addUserValidation(req, res, next) {
  const UserValidation = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),  
  })
  Joi.validate(req.body, UserValidation, function (error, value) {
    if (error) {
      let err = new ScbErrorHandling(error)
      let responseBody = err.generalResponse
      let responseStatus = err.statusCode
      return res.status(responseStatus).json(responseBody)
    }
    next()
  })
}