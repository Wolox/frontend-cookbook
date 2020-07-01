const { checkSchema, validationResult } = require('express-validator');
const errors = require('../errors');

const throwValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    next(errors.invalidParams(validationErrors.array({ onlyFirstError: true }).map(e => e.msg)));
  }
  next();
};
exports.validateSchema = schema => checkSchema(schema);
exports.validateSchemaAndFail = schema => [exports.validateSchema(schema), throwValidationErrors];
