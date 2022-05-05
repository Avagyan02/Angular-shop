"use strict";

require("dotenv/config");

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app"));

var _connectDB = _interopRequireDefault(require("./connectDB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 3000;

_http.default.createServer(_app.default).listen(PORT, () => {
  (0, _connectDB.default)();
  console.log(`Server run in port ${PORT}`);
});