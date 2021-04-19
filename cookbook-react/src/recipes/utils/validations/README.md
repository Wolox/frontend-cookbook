## Validations

**Props**

All validations return `undefined` if the validation passes, otherwise the return value is the errorMessage passed by parameter.

| validation | Description |
|:---|:---|
| required | Validates if the value exists |
| minLength | Validates that the amount of characters is more or equal than the minimum passed by parameter |
| maxLength | Validates that the amount of characters is less or equal than the minimum passed by parameter |
| pattern | Validates that the string matches a regex |
| email | Validates that the string is a valid email |
| numericalDigits | Validates that the string is a valid number |
