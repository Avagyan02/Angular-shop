export const HTTP_STATUSES = {
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
}

export const UserRole = {
  admin: 1,
  user: 2
}

export const UrlRegex = new RegExp(/src\s*=\s*"(.+?)"/);
export const phoneNumberRegexp = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
export const passwordRegexp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
export const codeLengthRegexp = new RegExp(/^.{6}$/);