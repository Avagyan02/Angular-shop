"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./api/product/index"));

var _index2 = _interopRequireDefault(require("./api/category/index"));

var _index3 = _interopRequireDefault(require("./api/auth/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use('/product', _index.default);
app.use('/category', _index2.default);
app.use('/auth', _index3.default);
var _default = app;
exports.default = _default;