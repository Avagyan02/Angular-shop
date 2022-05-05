"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _category = _interopRequireDefault(require("../../../models/category"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function validateProduct(req, res, next) {
  try {
    const joiSchema = _joi.default.object().keys({
      name: _joi.default.string().min(2).max(15).required(),
      price: _joi.default.number().required(),
      description: _joi.default.string().min(15).required(),
      quant: _joi.default.number().min(1).required(),
      category: _joi.default.string().required(),
      oldPrice: _joi.default.number()
    });

    const {
      error
    } = joiSchema.validate(req.body);

    if (error) {
      console.log(error);
      return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
    }

    const category = await _category.default.find({
      name: req.body.category
    });

    if (!category) {
      return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
    }

    req.category = category;
    console.log(req.category);
    next();
  } catch (error) {
    console.log(error);
    (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, false, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage);
  }
}

var _default = validateProduct;
exports.default = _default;