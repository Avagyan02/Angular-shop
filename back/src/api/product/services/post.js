import Product from '../../../models/product';
import Category from '../../../models/category';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES } from '../../../helpers/constants';
import saveImagesFromUpload from '../../../helpers/saveImagesFromUpload';
import generateSKU from '../../../helpers/generateSKU';

async function addProduct(req, res) {
  try {
    const media = await saveImagesFromUpload(req.files);
    console.log(media);

    const { category } = req;
    let codeSKU = generateSKU();
    const update = { $inc: { productsCount: 1 } };
    
    const createProduct = Product.create({
      name: req.body.name,
      productSKU: codeSKU,
      nowPrice: req.body.price,
      description: req.body.description,
      quant: req.body.quant,
      imageId: media,
      categoryId: category[0]._id,
    });

    const updatedCategory = Category.updateOne(category, update);

    await Promise.all([createProduct, updatedCategory]);
    return responseHelper(res, HTTP_STATUSES.SUCCESS.statusCode, true, HTTP_STATUSES.SUCCESS.statusMessage);
  } catch (error) {
    console.log(error);
    responseHelper(
      res, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, 
      false, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage
    );
  }
}

export default addProduct;