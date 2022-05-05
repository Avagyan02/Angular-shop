import 'dotenv/config';
import JWT from 'jsonwebtoken';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES } from '../../../helpers/constants';

function signIn(req, res) {
  const { user } = req;
  const SECRET_KEY = process.env.SECRET_KEY;
  const payload = {
    id: user._id,
    role: user.role
  }

  return responseHelper(
    res,
    HTTP_STATUSES.SUCCESS.statusCode,
    true,
    HTTP_STATUSES.SUCCESS.statusMessage,
    JWT.sign(payload, SECRET_KEY)
  )
}

export default signIn

