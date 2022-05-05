"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../../helpers/constants");

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _product = _interopRequireDefault(require("../../../models/product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getMany(req, res) {
  try {
    console.log(9); // const prodLimit = +req.query.limit;

    const {
      category
    } = req;
    let productList;
    console.log(category);

    if (category.name === 'any') {
      console.log(1);
      productList = await _product.default.find();
    } // } else {
    //   console.log(2);
    //   productList = await Product.findMany({ categoryId: new ObjectID(category) }).limit(prodLimit);
    //   console.log(3);
    // }


    console.log(productList);
    console.log(4);
    return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.SUCCESS.statusCode, true, _constants.HTTP_STATUSES.SUCCESS.statusMessage, productList);
  } catch (error) {
    (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, false, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage);
  }
}

var _default = getMany;
exports.default = _default;