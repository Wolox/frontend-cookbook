const bcrypt = require('bcryptjs');

const errors = require('../errors');
const logger = require('../logger');

exports.comparePassword = (password, hash) =>
  bcrypt.compare(password, hash).catch(err => {
    logger.error(err.message);
    throw errors.userSigninError('Invalid password');
  });
