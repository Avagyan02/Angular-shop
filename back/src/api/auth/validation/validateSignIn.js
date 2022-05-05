import Joi from 'joi';
import bcrypt from 'bcrypt';
import User from '../../../models/user';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES, passwordRegexp } from '../../../helpers/constants';

async function validateSignIn(req, res, next) {
  try {
    const joiSchema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().pattern(passwordRegexp).required()
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
    
    const user = await User.findOne({ email: req.body.email, verified: true });
    const pass = bcrypt.compareSync(req.body.password, user.password);
    if (!user || !pass) {
      return responseHelper(
        res,
        HTTP_STATUSES.BAD_REQUEST.statusCode,
        false,
        HTTP_STATUSES.BAD_REQUEST.statusMessage
      );
    }
    req.user = user;
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

export default validateSignIn;
