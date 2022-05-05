"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _post = _interopRequireDefault(require("./services/post"));

var _put = _interopRequireDefault(require("./services/put"));

var _validateProduct = _interopRequireDefault(require("./validation/validateProduct"));

var _searchProduct = _interopRequireDefault(require("./validation/searchProduct"));

var _saveImages = _interopRequireDefault(require("../../middlewares/saveImages"));

var _getManyValidation = _interopRequireDefault(require("./validation/getManyValidation"));

var _getMany = _interopRequireDefault(require("./services/getMany"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('/post', _saveImages.default.any('images'), _validateProduct.default, _post.default);
router.put('/update', _saveImages.default.any('images'), _validateProduct.default, _searchProduct.default, _put.default);
router.get('', _getManyValidation.default, _getMany.default);
var _default = router;
exports.default = _default;