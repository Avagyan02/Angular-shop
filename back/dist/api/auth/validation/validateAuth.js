"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateAuth(req, res, next) {
  const joiSchema = _joi.default.object().keys({
    name: _joi.default.string().required(),
    surname: _joi.default.string().required(),
    country: _joi.default.string().required(),
    telephone: _joi.default.string().pattern(_constants.phoneNumberRegexp),
    email: _joi.default.string().email().required(),
    password: _joi.default.string().pattern(_constants.passwordRegexp)
  });

  const {
    error
  } = joiSchema.validate(req.body);

  if (error) {
    return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
  }

  next();
}

var _default = validateAuth;
exports.default = _default;