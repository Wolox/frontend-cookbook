import i18next from 'i18next';

i18next.addResources('en', 'VALIDATIONS', {
  REQUIRED_FIELD: 'Required field',
  INVALID_EMAIL: 'Invalid email format',
  ALPHANUMERIC: 'This field can only contain alphanumeric values',
  ONLY_TEXT: 'This field can only contain text',
  ONLY_NUMBERS: 'This field can only contain numeric values',
  MIN_LENGTH: 'This field must be at least {{count}} character',
  MIN_LENGTH_plural: 'This field must be at least {{count}} characters',
  MAX_LENGTH: 'This field must be at most {{count}} character',
  MAX_LENGTH_plural: 'This field must be at most {{count}} characters',
  EQUAL_LENGTH: 'This field must be {{count}} character',
  EQUAL_LENGTH_plural: 'This field must be {{count}} characters'
});
