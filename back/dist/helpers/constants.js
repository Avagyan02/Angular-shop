"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phoneNumberRegexp = exports.passwordRegexp = exports.codeLengthRegexp = exports.UserRole = exports.UrlRegex = exports.HTTP_STATUSES = void 0;
const HTTP_STATUSES = {
  SUCCESS: {
    statusCode: 200,
    statusMessage: 'SUCCESS'
  },
  BAD_REQUEST: {
    statusCode: 400,
    statusMessage: 'BAD_REQUEST'
  },
  NOT_AUTHORIZED: {
    statusCode: 401,
    statusMessage: 'BAD_REQUEST'
  },
  FORBIDDEN: {
    statusCode: 403,
    statusMessage: 'FORBIDDEN'
  },
  NOT_FOUND: {
    statusCode: 404,
    statusMessage: 'NOT FOUND'
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    statusMessage: 'INTERNAL_SERVER_ERROR'
  }
};
exports.HTTP_STATUSES = HTTP_STATUSES;
const UserRole = {
  admin: 1,
  user: 2
};
exports.UserRole = UserRole;
const UrlRegex = new RegExp(/src\s*=\s*"(.+?)"/);
exports.UrlRegex = UrlRegex;
const phoneNumberRegexp = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
exports.phoneNumberRegexp = phoneNumberRegexp;
const passwordRegexp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
exports.passwordRegexp = passwordRegexp;
const codeLengthRegexp = new RegExp(/^.{6}$/);
exports.codeLengthRegexp = codeLengthRegexp;