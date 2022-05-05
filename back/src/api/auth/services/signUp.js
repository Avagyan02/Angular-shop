import bcrypt from 'bcrypt';
import User from '../../../models/user';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES, UserRole } from '../../../helpers/constants';
import codeGenerator from '../../../helpers/codeGenerator';
import mailer from '../../../helpers/sendMessage';

async function signUp(req, res) {
  try {
    const code = codeGenerator();
    const message = {
      to: req.body.email,
      html: `<h1>You registered</h1>
            <h3>To pass full verification use this code. ${code}</h3>`,
    };
    
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return responseHelper(
        res, 
        HTTP_STATUSES.BAD_REQUEST.statusCode, 
        false,
        HTTP_STATUSES.BAD_REQUEST.statusMessage
      )
    }

    await User.create({
      name: req.body.name,
      surname: req.body.surname,
      country: req.body.country,
      telephone: req.body.telephone,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      role: UserRole.user,
      verifiedCode: code
    });

    mailer(message);
    return responseHelper(res, HTTP_STATUSES.SUCCESS.statusCode, true, HTTP_STATUSES.SUCCESS.statusMessage);
  } catch (error) {
    responseHelper(
      res, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, 
      true, 
      HTTP_STATUSES.SUCCESS.statusMessage
    );
  }
}

export default signUp;
