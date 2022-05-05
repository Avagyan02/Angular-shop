"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _post = _interopRequireDefault(require("./services/post"));

var _put = _interopRequireDefault(require("./services/put"));

var _searchCategory = _interopRequireDefault(require("./validation/searchCategory"));

var _validateCategory = _interopRequireDefault(require("./validation/validateCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('/post', _validateCategory.default, _post.default);
router.put('/update', _validateCategory.default, _searchCategory.default, _put.default);
var _default = router;
exports.default = _default;