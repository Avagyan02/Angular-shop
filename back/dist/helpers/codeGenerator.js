"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function codeGenerator() {
  const val = 'asdfghlkj1234567890';
  let code = '';

  for (let i = 0; i <= 5; i++) {
    code += val[Math.floor(Math.random() * val.length)];
  }

  return code;
}

var _default = codeGenerator;
exports.default = _default;