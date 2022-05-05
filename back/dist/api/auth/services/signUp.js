"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../../../models/user"));

var _responseHelper = _interopRequireDefault(require("../../../helpers/responseHelper"));

var _constants = require("../../../helpers/constants");

var _codeGenerator = _interopRequireDefault(require("../../../helpers/codeGenerator"));

var _sendMessage = _interopRequireDefault(require("../../../helpers/sendMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function signUp(req, res) {
  try {
    const code = (0, _codeGenerator.default)();
    const message = {
      to: req.body.email,
      html: `<h1>You registered</h1>
            <h3>To pass full verification use this code. ${code}</h3>`
    };
    const user = await _user.default.findOne({
      email: req.body.email
    });

    if (user) {
      return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.BAD_REQUEST.statusCode, false, _constants.HTTP_STATUSES.BAD_REQUEST.statusMessage);
    }

    await _user.default.create({
      name: req.body.name,
      surname: req.body.surname,
      country: req.body.country,
      telephone: req.body.telephone,
      email: req.body.email,
      password: _bcrypt.default.hashSync(req.body.password, 10),
      role: _constants.UserRole.user,
      verifiedCode: code
    });
    (0, _sendMessage.default)(message);
    return (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.SUCCESS.statusCode, true, _constants.HTTP_STATUSES.SUCCESS.statusMessage);
  } catch (error) {
    (0, _responseHelper.default)(res, _constants.HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, true, _constants.HTTP_STATUSES.SUCCESS.statusMessage);
  }
}

var _default = signUp;
exports.default = _default;