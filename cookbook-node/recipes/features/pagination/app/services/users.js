const nodePagination = require('@wolox/pagination-node');
const errors = require('../errors');
const { User } = require('../models');

exports.getUsers = (page, limit, request) =>
  User.findAll({ where: request.query || {} })
    .then(users =>
      nodePagination.paginate(users, request, {
        page,
        limit
      })
    )
    .catch(err => {
      throw errors.databaseError(err);
    });
