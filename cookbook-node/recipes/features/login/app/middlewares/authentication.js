const { authenticationError, loginError } = require('../errors');
const logger = require('../logger');
const { header_name } = require('../../config').common.session;
const {
  AUTHENTICATION_ERROR_MSG,
  INVALID_TOKEN_ERROR_MSG,
  TOKEN_EXPIRED_ERROR_MSG
} = require('../constants/errors');
const { validateToken } = require('../helpers/token');
const { findBy } = require('../services/users');

exports.authenticate = (req, _, next) => {
  const token = req.headers[header_name];
  if (!token) return next(authenticationError(AUTHENTICATION_ERROR_MSG));
  try {
    const decodeToken = validateToken(token);
    return findBy({ username: decodeToken.username })
      .then(user => {
        if (!user) return next(authenticationError(AUTHENTICATION_ERROR_MSG));
        logger.info(`User ${user.username} authenticated successfully`);
        req.user = { ...user.dataValues };
        return next();
      })
      .catch(next);
  } catch (err) {
    return next(
      authenticationError(
        err.name === 'TokenExpiredError' ? TOKEN_EXPIRED_ERROR_MSG : INVALID_TOKEN_ERROR_MSG
      )
    );
  }
};

exports.checkUser = (req, _, next) =>
  findBy({ username: req.body.username }).then(user => {
    if (!user) {
      logger.error('Invalid username');
      next(loginError('Username or password invalid'));
    }
    req.user = user;
    next();
  });
