"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _product = _interopRequireDefault(require("../../../models/product"));

var _category = _interopRequireDefault(require("../../../models/category"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

var _saveImagesFromUpload = _interopRequireDefault(require("../../../helpers/saveImagesFromUpload"));

var _generateSKU = _interopRequireDefault(require("../../../helpers/generateSKU"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addProduct(req, res) {
  try {
    const media = await (0, _saveImagesFromUpload.default)(req.files);
    console.log(media);
    const {
      category
    } = req;
    let codeSKU = (0, _generateSKU.default)();
    const update = {
      $inc: {
        productsCount: 1
      }
    };

    const createProduct = _product.default.create({
      name: req.body.name,
      productSKU: codeSKU,
      nowPrice: req.body.price,
      description: req.body.description,
      quant: req.body.quant,
      imageId: media,
      categoryId: category[0]._id
    });

    const updatedCategory = _category.default.updateOne(category, update);

    await Promise.all([createProduct, updatedCategory]);
    return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.SUCCESS.statusCode, true, _constants.HTTP_STATUSES.SUCCESS.statusMessage);
  } catch (error) {
    console.log(error);
    (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, false, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage);
  }
}

var _default = addProduct;
exports.default = _default;