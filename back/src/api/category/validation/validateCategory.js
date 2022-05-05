import Joi from 'joi';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES } from '../../../helpers/constants';

function validateCategory(req, res, next) {
  const joiSchema = Joi.object().keys({
    name: Joi.string().min(2).max(25).required(),    
  });

  const { error } = joiSchema.validate(req.body);
  if (error) {
    console.log(error);
    return responseHelper(
      res,
      HTTP_STATUSES.BAD_REQUEST.statusCode,
      false,
      HTTP_STATUSES.BAD_REQUEST.statusMessage
    )
  }
  return next();
}

export default validateCategory;