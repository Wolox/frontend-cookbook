/* eslint-disable @typescript-eslint/naming-convention */
const STATUS_CODES = {
  NOT_FOUND: 404,
  OK: 200,
  MAX_CLIENT_ERROR: 299
} as const;

export default STATUS_CODES;
