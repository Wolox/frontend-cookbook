const usersService = require('../services/users');

exports.getUsers = (req, res, next) =>
  usersService
    .getUsers(req.headers.page, req.headers.limit, req)
    .then(users => res.send(users))
    .catch(error => next(error));
