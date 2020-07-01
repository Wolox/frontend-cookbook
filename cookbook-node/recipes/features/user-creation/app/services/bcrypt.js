const bcrypt = require('bcrypt');
const errors = require('../errors');
const logger = require('../logger');
const config = require('../../config');

const saltRounds = config.common.api.bcryptSaltRounds;

exports.crypt = hash =>
  bcrypt
    .genSalt(Number(saltRounds))
    .then(salt => bcrypt.hash(hash, salt))
    .catch(error => {
      logger.error(error);
      throw errors.hashError(error.message);
    });
