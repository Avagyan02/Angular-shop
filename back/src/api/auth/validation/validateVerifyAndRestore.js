import Joi from 'joi';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES, codeLengthRegexp, passwordRegexp } from '../../../helpers/constants';

async function validateVerify(req, res, next) {
  try {
  const joiSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    code: Joi.string().pattern(codeLengthRegexp),
    password: Joi.string().pattern(passwordRegexp)
  });

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
  } catch (error) {
    responseHelper(
      res, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, 
      true, 
      HTTP_STATUSES.SUCCESS.statusMessage
    );
  }
}

export default validateVerify;