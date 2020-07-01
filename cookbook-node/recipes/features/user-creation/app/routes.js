const usersController = require('./controllers/users');
const paramsValidator = require('./middlewares/paramsValidator');
const schemas = require('./schemas');
const { healthCheck } = require('./controllers/healthCheck');

const URL = '/api/v1';

exports.init = app => {
  app.get('/health', healthCheck);
  app.post(
    `${URL}/users`,
    paramsValidator.validateSchemaAndFail(schemas.users.create),
    usersController.createUser
  );
};
