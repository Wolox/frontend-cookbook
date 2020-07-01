const errors = require('../errors');
const Users = require('../models').users;
const logger = require('../logger');

exports.findBy = condition =>
  Users.findOne({ where: condition }).catch(err => {
    logger.error(err.message);
    throw errors.databaseError('Error when trying to obtain user');
  });
