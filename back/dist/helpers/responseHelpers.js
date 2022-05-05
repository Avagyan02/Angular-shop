"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function responseHelper(res, status, success, message = null, data = null) {
  return res.status(status).json({
    success,
    message,
    data
  });
}

var _default = responseHelper;
exports.default = _default;