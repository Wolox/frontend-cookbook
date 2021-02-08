const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const numericalDigitsRegex = /^([0-9]*)$/;

export const required = (errorMessage: string) => (val?: any) => (val ? undefined : errorMessage);

export const minLength = (length: number, errorMessage: string) => (val?: string) =>
  val && val.length >= length ? undefined : errorMessage;

export const maxLength = (length: number, errorMessage: string) => (val?: string) =>
  val && val.length <= length ? undefined : errorMessage;

export const pattern = (patternVal: RegExp, errorMessage: string) => (val?: string) =>
  val && patternVal.test(val) ? undefined : errorMessage;

export const email = (errorMessage: string) => pattern(emailRegex, errorMessage);

export const numericalDigits = (errorMessage: string) => pattern(numericalDigitsRegex, errorMessage);
