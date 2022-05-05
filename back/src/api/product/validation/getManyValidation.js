import Category from '../../../models/category';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES } from '../../../helpers/constants';

async function getManyValidation(req, res, next) {
  try {
    const prodLimit = +req.query.limit;
    const categoryName = req.query.category;
    let category;
    // console.log(categoryName);
    console.log(3);

    if (prodLimit < 0) {
      return responseHelper(
        res,
        HTTP_STATUSES.BAD_REQUEST.statusCode,
        false,
        HTTP_STATUSES.BAD_REQUEST.statusMessage
      )
    }
    console.log(4);

    if (categoryName !== 'any') {
      category = await Category.findOne({ name: categoryName });
      console.log(5);
      if (!category) {
        console.log(6);
        return responseHelper(
          res,
          HTTP_STATUSES.BAD_REQUEST.statusCode,
          false,
          HTTP_STATUSES.BAD_REQUEST.statusMessage
        )
      }
    }
    const val = '' + category._id;
    console.log(val);
    req.category = !category ? 'any': category;
    next();
  } catch (error) {
    console.log(8);
    responseHelper(
      res, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, 
      false, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage
    );
  }
}

export default getManyValidation;
