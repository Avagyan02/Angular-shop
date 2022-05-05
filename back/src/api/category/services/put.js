import Category from "../../../models/category";
import responseHelper from "../../../helpers/responseHelper";
import { HTTP_STATUSES } from "../../../helpers/constants";

async function updateCategory(req, res) {
  try {

    const category = req.category;
    await category.save();
    return responseHelper(res, HTTP_STATUSES.SUCCESS.statusCode, true, HTTP_STATUSES.SUCCESS.statusMessage);

  } catch (error) {
    responseHelper(
      res, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, 
      false, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage
    );
  }
}

export default updateCategory;