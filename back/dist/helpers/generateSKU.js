"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function generateSKU() {
  let codeSKU = '';

  for (let i = 0; i <= 5; i++) {
    codeSKU += Math.floor(Math.random() * 9);
  }

  return codeSKU;
}

var _default = generateSKU;
exports.default = _default;