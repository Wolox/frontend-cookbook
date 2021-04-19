import * as Validator from '.';

describe('#required', () => {
  const errorMessage = 'The field is required';

  test('returns undefined when the value exists', () => {
    expect(Validator.required(errorMessage)('foo')).toBe(undefined);
  });

  test('returns an error when the value is undefined', () => {
    expect(Validator.required(errorMessage)(undefined)).toBe(errorMessage);
  });

  test('returns an error when the value is an empty string', () => {
    expect(Validator.required(errorMessage)('')).toBe(errorMessage);
  });

  test('returns an error when the value is null', () => {
    expect(Validator.required(errorMessage)(null)).toBe(errorMessage);
  });
});

describe('#minLength', () => {
  const min = 5;
  const errorMessage = `The min length should be ${min}`;

  test('returns undefined when the value has more characters than the minimum', () => {
    expect(Validator.minLength(min, errorMessage)('goodbye')).toBe(undefined);
  });

  test('returns undefined when the value has equal characters than the minimum', () => {
    expect(Validator.minLength(min, errorMessage)('hello')).toBe(undefined);
  });

  test('returns an error when the value has less characters than the minimum', () => {
    expect(Validator.minLength(min, errorMessage)('hi')).toBe(errorMessage);
  });

  test('returns an error when the value is undefined', () => {
    expect(Validator.minLength(min, errorMessage)()).toBe(errorMessage);
  });
});

describe('#maxLength', () => {
  const max = 5;
  const errorMessage = `The max length should be ${max}`;

  test('returns undefined when the value has less characters than the minimum', () => {
    expect(Validator.maxLength(max, errorMessage)('hi')).toBe(undefined);
  });

  test('returns undefined when the value has equal characters than the minimum', () => {
    expect(Validator.maxLength(max, errorMessage)('hello')).toBe(undefined);
  });

  test('returns an error when the value has more characters than the minimum', () => {
    expect(Validator.maxLength(max, errorMessage)('goodbye')).toBe(errorMessage);
  });

  test('returns an error when the value is undefined', () => {
    expect(Validator.maxLength(max, errorMessage)()).toBe(errorMessage);
  });
});

describe('#pattern', () => {
  const errorMessage = 'The string does not match the pattern';

  test('returns undefined when the value matches the pattern', () => {
    expect(Validator.pattern(/^hello$/, errorMessage)('hello')).toBe(undefined);
  });

  test('returns undefined when the value does not match the pattern', () => {
    expect(Validator.pattern(/^hello$/, errorMessage)('hello2')).toBe(errorMessage);
  });
});

describe('#email', () => {
  const errorMessage = 'The email is invalid';

  test('returns undefined when the value is a valid email', () => {
    expect(Validator.email(errorMessage)('foo@bar.com')).toBe(undefined);
  });

  test('returns error when the value is not a valid email', () => {
    expect(Validator.email(errorMessage)('invalid email')).toBe(errorMessage);
  });
});

describe('#numericalDigits', () => {
  const errorMessage = 'The value is not numerical';

  test('returns undefined when the value is a numerical string', () => {
    expect(Validator.numericalDigits(errorMessage)('123123')).toBe(undefined);
  });

  test('returns error when the value is not a purely numerical string', () => {
    expect(Validator.numericalDigits(errorMessage)('bar123')).toBe(errorMessage);
  });
});
