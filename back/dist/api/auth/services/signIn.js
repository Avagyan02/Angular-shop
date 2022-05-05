"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signIn(req, res) {
  const {
    user
  } = req;
  const SECRET_KEY = process.env.SECRET_KEY;
  const payload = {
    id: user._id,
    role: user.role
  };
  return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.SUCCESS.statusCode, true, _constants.HTTP_STATUSES.SUCCESS.statusMessage, _jsonwebtoken.default.sign(payload, SECRET_KEY));
}

var _default = signIn;
exports.default = _default;