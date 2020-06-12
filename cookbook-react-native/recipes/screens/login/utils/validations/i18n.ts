import i18next from 'i18next';

i18next.addResources('en', 'VALIDATIONS', {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Invalid email format',
  ALPHANUMERIC: 'This field must be alphanumeric',
  ONLY_TEXT: 'This field allows only alphabets',
  ONLY_NUMBERS: 'This field allows only numbers',
  MIN_LENGTH: 'This field must be at least {{count}} character',
  MIN_LENGTH_plural: 'This field must be at least {{count}} characters',
  MAX_LENGTH: 'This field must be at most {{count}} character',
  MAX_LENGTH_plural: 'This field must be at most {{count}} characters',
  EQUAL_LENGTH: 'This field must have {{count}} character',
  EQUAL_LENGTH_plural: 'This field must have {{count}} characters'
});
