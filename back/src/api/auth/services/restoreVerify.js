import bcrypt from 'bcrypt';
import User from "../../../models/user";
import responseHelper from "../../../helpers/responseHelper";
import { HTTP_STATUSES } from "../../../helpers/constants";

async function restoreVerify(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email, restoreCode: req.body.code });
		if (!user) {
			return responseHelper(
				res, 
				HTTP_STATUSES.BAD_REQUEST.statusCode, 
				false,
				HTTP_STATUSES.BAD_REQUEST.statusMessage
			);
		}

		user.password = bcrypt.hashSync(req.body.password, 10);
		await user.save();
		
		return responseHelper(res, HTTP_STATUSES.SUCCESS.statusCode, true, HTTP_STATUSES.SUCCESS.statusMessage);
	} catch(error) {
		responseHelper(
      res, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, 
      true, 
      HTTP_STATUSES.SUCCESS.statusMessage
    );
	}
}

export default restoreVerify;