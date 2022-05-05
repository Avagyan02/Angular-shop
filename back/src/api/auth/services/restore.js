import mailer from "../../../helpers/sendMessage";
import codeGenerator from "../../../helpers/codeGenerator";
import responseHelper from "../../../helpers/responseHelper";
import { HTTP_STATUSES } from "../../../helpers/constants";
import User from "../../../models/user";

async function restore(req, res) {
  try {
    const code = codeGenerator();
    const message = {
      to: req.body.email,
      html: `<h1>Password update</h1>
            <h3>For update yout password use this code. ${code}</h3>`,
    };

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return responseHelper(
        res,
        HTTP_STATUSES.BAD_REQUEST.statusCode,
        false,
        HTTP_STATUSES.BAD_REQUEST.statusMessage
      );
    }

    user.restoreCode = code;
    console.log(user);
    mailer(message);
    return responseHelper(
      res,
      HTTP_STATUSES.SUCCESS.statusCode,
      true,
      HTTP_STATUSES.SUCCESS.statusMessage
    );
  } catch (error) {
    responseHelper(
      res,
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode,
      false,
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage
    );
  }
}

export default restore;
