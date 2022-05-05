"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _signUp = _interopRequireDefault(require("./services/signUp"));

var _verify = _interopRequireDefault(require("./services/verify"));

var _restore = _interopRequireDefault(require("./services/restore"));

var _signIn = _interopRequireDefault(require("./services/signIn"));

var _restoreVerify = _interopRequireDefault(require("./services/restoreVerify"));

var _validateAuth = _interopRequireDefault(require("./validation/validateAuth"));

var _validateVerifyAndRestore = _interopRequireDefault(require("./validation/validateVerifyAndRestore"));

var _validateSignIn = _interopRequireDefault(require("./validation/validateSignIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('', _validateAuth.default, _signUp.default);
router.post('/verify', _validateVerifyAndRestore.default, _verify.default);
router.post('/restore', _validateVerifyAndRestore.default, _restore.default);
router.post('/restore/verify', _validateVerifyAndRestore.default, _restoreVerify.default);
router.post('/login', _validateSignIn.default, _signIn.default);
var _default = router;
exports.default = _default;