import express from 'express';
import addProduct from './services/post';
import updateProduct from './services/put';
import validateProduct from './validation/validateProduct';
import searchProduct from './validation/searchProduct';
import saveImages from '../../middlewares/saveImages';
import getManyValidation from './validation/getManyValidation';
import getMany from './services/getMany';

const router = express.Router();

router
  .post('/post', saveImages.any('images'), validateProduct, addProduct);

router
  .put('/update', saveImages.any('images'), validateProduct, searchProduct, updateProduct);   

router
  .get('', getManyValidation, getMany);  

export default router;