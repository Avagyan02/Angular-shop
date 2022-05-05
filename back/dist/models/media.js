"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mediaSchema = new _mongoose.default.Schema({
  path: {
    type: String,
    required: true
  },
  originalPath: {
    type: String,
    required: true
  },
  createDt: {
    type: Date,
    default: Date.now
  }
});

const Media = _mongoose.default.model('media', mediaSchema);

var _default = Media;
exports.default = _default;