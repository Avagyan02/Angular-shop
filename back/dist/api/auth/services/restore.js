"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sendMessage = _interopRequireDefault(require("../../../helpers/sendMessage"));

var _codeGenerator = _interopRequireDefault(require("../../../helpers/codeGenerator"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

var _user = _interopRequireDefault(require("../../../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function restore(req, res) {
  try {
    const code = (0, _codeGenerator.default)();
    const message = {
      to: req.body.email,
      html: `<h1>Password update</h1>
            <h3>For update yout password use this code. ${code}</h3>`
    };
    const user = await _user.default.findOne({
      email: req.body.email
    });

    if (!user) {
      return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
    }

    user.restoreCode = code;
    console.log(user);
    (0, _sendMessage.default)(message);
    return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.SUCCESS.statusCode, true, _constants.HTTP_STATUSES.SUCCESS.statusMessage);
  } catch (error) {
    (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, false, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage);
  }
}

var _default = restore;
exports.default = _default;