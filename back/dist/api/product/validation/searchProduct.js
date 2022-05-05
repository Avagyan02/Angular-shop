"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _product = _interopRequireDefault(require("../../../models/product"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function searchProduct(req, res, next) {
  try {
    const productId = req.params.productId;
    const category = req.category;
    const product = await _product.default.findById(productId);

    if (!category) {
      return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
    }

    if (product.categoryId !== category._id) {
      product.categoryId = category._id;
    }

    req.product = product;
    next();
  } catch (error) {
    (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, false, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage);
  }
}

var _default = searchProduct;
exports.default = _default;