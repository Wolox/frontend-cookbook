exports.create = {
  name: {
    in: ['body'],
    exists: true,
    errorMessage: 'name field is mandatory'
  },
  email: {
    in: ['body'],
    exists: true,
    errorMessage: 'email field is mandatory'
  },
  password: {
    in: ['body'],
    exists: true,
    isLength: {
      options: { min: 8 }
    },
    isAlphanumeric: true
  }
};
