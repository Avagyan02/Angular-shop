"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateCategory(req, res, next) {
  const joiSchema = _joi.default.object().keys({
    name: _joi.default.string().min(2).max(25).required()
  });

  const {
    error
  } = joiSchema.validate(req.body);

  if (error) {
    console.log(error);
    return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
  }

  return next();
}

var _default = validateCategory;
exports.default = _default;