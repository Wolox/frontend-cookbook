const errors = require('../constants/errors');

exports.userLogInSchema = {
  username: {
    in: ['body'],
    isEmpty: {
      negated: true,
      errorMessage: errors.REQUIRED_USERNAME_ERROR
    },
    trim: true,
    errorMessage: errors.INVALID_USERNAME_ERROR
  },
  password: {
    in: ['body'],
    isEmpty: {
      negated: true,
      errorMessage: errors.REQUIRED_PASSWORD_ERROR
    },
    isLength: {
      options: { min: 8, max: 30 },
      errorMessage: errors.INVALID_PASSWORD_LENGTH_ERROR
    },
    isAlphanumeric: true,
    errorMessage: errors.INVALID_PASSWORD_ERROR
  }
};
