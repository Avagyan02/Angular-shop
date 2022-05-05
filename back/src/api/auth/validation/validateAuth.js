import Joi from 'joi';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES, phoneNumberRegexp, passwordRegexp } from '../../../helpers/constants';

function validateAuth(req, res, next) {
  const joiSchema = Joi.object().keys({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    country: Joi.string().required(), 
    telephone: Joi.string().pattern(phoneNumberRegexp),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(passwordRegexp),
  })

  const { error } = joiSchema.validate(req.body);
  if (error) {
    return responseHelper(
      res, 
      HTTP_STATUSES.BAD_REQUEST.statusCode, 
      false,
      HTTP_STATUSES.BAD_REQUEST.statusMessage
    );
  }
  next();
}

export default validateAuth;
