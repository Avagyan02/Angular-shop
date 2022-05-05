"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _media = _interopRequireDefault(require("../models/media"));

var _constants = require("./constants");

var _responseHelper = _interopRequireDefault(require("./responseHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function saveImagesFromUpload(list) {
  try {
    const imagesList = list.map(el => ({
      path: el.path,
      originalPath: el.originalname
    }));
    const createdFiles = await _media.default.insertMany(imagesList);
    return createdFiles.map(el => el._id);
  } catch (error) {
    return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, false, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage);
  }
}

var _default = saveImagesFromUpload;
exports.default = _default;