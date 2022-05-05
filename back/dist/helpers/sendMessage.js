"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transporter = _nodemailer.default.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'samvelavagyan91@gmail.com',
    pass: 'Avagyan2002'
  },
  from: 'Mailer Test <samvelavagyan91@gmail.com>'
});

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

var _default = mailer;
exports.default = _default;