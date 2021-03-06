import { create, ApiResponse } from 'apisauce';

import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

const deserializer = new CamelcaseSerializer();
const serializer = new SnakecaseSerializer();

export const STATUS_CODES = {
  unauthorized: 401
};

const api = create({
  baseURL: process.env.REACT_API_BASE_URL,
  timeout: 15000
});

api.addResponseTransform(response => {
  if (response.data) {
    response.data = deserializer.serialize(response.data);
  }
});

api.addRequestTransform(request => {
  if (request.data) {
    request.data = serializer.serialize(request.data);
  }
});

// eslint-disable-next-line no-unused-vars, prettier/prettier, @typescript-eslint/no-unused-vars
export const setupRequestMonitor = (onResponse: (res: ApiResponse<any>) => void) => {
  api.addMonitor(response => {
    onResponse(response);
  });
};

export default api;
