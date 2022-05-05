"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _constants = require("../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  telephone: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  products: {
    productsOnSale: [{
      type: _mongoose.default.Schema.Types.ObjectId,
      ref: 'product',
      default: null
    }],
    purchasedProducts: [{
      type: _mongoose.default.Schema.Types.ObjectId,
      ref: 'product',
      default: null
    }],
    soldproducts: [{
      type: _mongoose.default.Schema.Types.ObjectId,
      ref: 'product',
      default: null
    }]
  },
  verified: {
    type: Boolean,
    default: false
  },
  verifiedCode: {
    type: String,
    default: null
  },
  restore: {
    typeo: Boolean,
    default: false
  },
  restoreCode: {
    type: String,
    default: null
  },
  registerDt: {
    type: Date,
    default: Date.now
  },
  role: {
    type: Number,
    default: _constants.UserRole.user
  }
});

const User = _mongoose.default.model('users', userSchema);

var _default = User;
exports.default = _default;