// const controller = require('./controllers/controller');
const users = require('./controllers/users');
const api = require('./controllers/api');
const schemaValidator = require('./middlewares/schemas_validator');
const { userLogInSchema } = require('./schemas/users');
const { checkUser, authenticate } = require('./middlewares/authentication');

exports.init = app => {
  app.post('/login', [schemaValidator(userLogInSchema), checkUser], users.logIn);
  app.get('/api/secure', authenticate, api.secure);
};
