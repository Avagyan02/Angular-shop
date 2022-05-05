"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _category = _interopRequireDefault(require("../../../models/category"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getManyValidation(req, res, next) {
  try {
    const prodLimit = +req.query.limit;
    const categoryName = req.query.category;
    let category; // console.log(categoryName);

    console.log(3);

    if (prodLimit < 0) {
      return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
    }

    console.log(4);

    if (categoryName !== 'any') {
      category = await _category.default.findOne({
        name: categoryName
      });
      console.log(5);

      if (!category) {
        console.log(6);
        return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
      }
    }

    const val = '' + category._id;
    console.log(val);
    req.category = !category ? 'any' : category;
    next();
  } catch (error) {
    console.log(8);
    (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, false, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage);
  }
}

var _default = getManyValidation;
exports.default = _default;