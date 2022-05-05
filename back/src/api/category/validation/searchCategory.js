import Category from "../../../models/category";
import responseHelper from "../../../helpers/responseHelper";
import { HTTP_STATUSES } from "../../../helpers/constants";

async function searchCategory(req, res) {
  try {

    const category = await Category.find({name: req.body.name});
    if (!category) {
      return responseHelper(
        res,
        HTTP_STATUSES.BAD_REQUEST.statusCode,
        false,
        HTTP_STATUSES.BAD_REQUEST.statusMessage
      )
    }
    req.category = category;
    next();

  } catch (error) {
    responseHelper(
      res, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, 
      false, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage
    );
  }
}

export default searchCategory;