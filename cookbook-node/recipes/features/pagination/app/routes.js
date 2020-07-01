const usersController = require('./controllers/users');

const URL = '/api/v1';

exports.init = app => {
  app.get(`${URL}/users`, usersController.getUsers);
};
