const logger = require('../logger');
const errors = require('../errors');
const { comparePassword } = require('../helpers/users');
const { generateToken } = require('../helpers/token');

exports.logIn = ({ body: { username, password }, user }, res, next) =>
  comparePassword(password, user.password)
    .then(validPassword => {
      if (!validPassword) {
        logger.error('Invalid password');
        throw errors.loginError('Username or password invalid');
      }
      return generateToken({ username });
    })
    .then(token => res.send({ token }))
    .catch(next);
