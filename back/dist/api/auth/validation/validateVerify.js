"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _user = _interopRequireDefault(require("../../../models/user"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function validateVerify(req, res, next) {
  try {
    const joiSchema = _joi.default.object().keys({
      email: _joi.default.string().email().required(),
      code: _joi.default.string().pattern(_constants.codeLengthRegexp)
    });

    const {
      error
    } = joiSchema.validate(req.body);

    if (error) {
      return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
    }

    const user = await _user.default.findOne({
      email: req.body.email,
      verifiedCode: req.body.code
    });

    if (!user || user.verified) {
      return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
    }

    req.user = user;
    console.log(user, user.verified);
    next();
  } catch (error) {
    (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, true, _constants.HTTP_STATUSES.SUCCESS.statusMessage);
  }
}

var _default = validateVerify;
exports.default = _default;