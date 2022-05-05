import Joi from 'joi';
import Category from '../../../models/category';
import responseHelper from '../../../helpers/responseHelper';
import { HTTP_STATUSES } from '../../../helpers/constants';

async function validateProduct(req, res, next) {
  try {
    const joiSchema = Joi.object().keys({
      name: Joi.string().min(2).max(15).required(),
      price: Joi.number().required(),
      description: Joi.string().min(15).required(),
      quant: Joi.number().min(1).required(),
      category: Joi.string().required(),
      oldPrice: Joi.number(),
    });
    
    const { error } = joiSchema.validate(req.body);
    if (error) {
      console.log(error);
      return responseHelper(
        res, 
        HTTP_STATUSES.BAD_REQUEST.statusCode, 
        false, 
        HTTP_STATUSES.BAD_REQUEST.statusMessage  
      );
    }

    const category = await Category.find({ name: req.body.category });
    if (!category) {
      return responseHelper(
        res, 
        HTTP_STATUSES.BAD_REQUEST.statusCode, 
        false, 
        HTTP_STATUSES.BAD_REQUEST.statusMessage  
      );
    }
    req.category = category;
    console.log(req.category);
    next();
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

export default validateProduct;
