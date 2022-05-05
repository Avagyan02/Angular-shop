import Product from '../../../models/product';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES } from '../../../helpers/constants';

async function searchProduct(req, res, next) {
  try {
    const productId = req.params.productId;
    const category = req.category;

    const product = await Product.findById(productId);
  
    if (!category) {
      return responseHelper(
        res, 
        HTTP_STATUSES.BAD_REQUEST.statusCode, 
        false, 
        HTTP_STATUSES.BAD_REQUEST.statusMessage
      );
    }
    if (product.categoryId !== category._id) {
      product.categoryId = category._id;
    }
    req.product = product;
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

export default searchProduct;