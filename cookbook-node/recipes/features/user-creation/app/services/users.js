const errors = require('../errors');
const logger = require('../logger');
const { User } = require('../models');

exports.createUser = data => {
  logger.info('Create User: ', data);

  return User.create(data).catch(error => {
    logger.error(error);
    throw errors.invalidParams(error.message);
  });
};
