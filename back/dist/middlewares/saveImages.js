"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = _multer.default.diskStorage({
  destination(req, res, cb) {
    cb(null, 'media');
  },

  filename(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }

});

const types = ['image/jpg', 'image/jpeg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var _default = (0, _multer.default)({
  storage,
  fileFilter
});

exports.default = _default;