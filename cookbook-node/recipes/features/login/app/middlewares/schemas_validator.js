const { checkSchema, validationResult } = require('express-validator');
const { schemaError } = require('../errors');

module.exports = schema => [
  checkSchema(schema),
  (req, _, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return next(schemaError(errors));
    return next();
  }
];
