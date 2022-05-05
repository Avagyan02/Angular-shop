"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _category = _interopRequireDefault(require("../../../models/category"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateCategory(req, res) {
  try {
    const category = req.category;
    await category.save();
    return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.SUCCESS.statusCode, true, _constants.HTTP_STATUSES.SUCCESS.statusMessage);
  } catch (error) {
    (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, false, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage);
  }
}

var _default = updateCategory;
exports.default = _default;