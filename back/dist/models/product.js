"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  categoryId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'category'
  },
  addingDt: {
    type: Date,
    default: Date.now
  },
  updateDt: {
    type: Date,
    default: null
  },
  imageId: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'media'
  }],
  nowPrice: {
    type: Number,
    required: true
  },
  oldPrice: {
    type: Number,
    default: null
  },
  description: {
    type: String,
    required: true
  },
  productSKU: {
    type: Number,
    required: true
  },
  quant: {
    type: Number,
    required: true
  }
});

const Product = _mongoose.default.model('product', productSchema);

var _default = Product;
exports.default = _default;