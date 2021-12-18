import { ApiResponse } from 'apisauce';

const TOTAL_ELEMENTS = 100;
const LIST = [...Array(TOTAL_ELEMENTS)].map((_, i) => i);

export interface Payload {
  skip: number;
  limit: number;
}

export interface Response {
  list: number[];
  totalCount: number;
}

const SECONDS = 500;

export const getList = ({ skip, limit }: Payload) => {
  const initValue = skip > 0 ? skip * limit : 0;
  const lastValue = skip > 0 ? (skip + 1) * limit : limit;
  const responseList = LIST.slice(initValue, lastValue);

  return new Promise<ApiResponse<Response>>((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true as const,
        problem: null,
        originalError: null,
        data: {
          list: responseList,
          totalCount: LIST.length
        },
        status: 200,
        headers: {},
        config: {},
        duration: SECONDS
      });
    }, SECONDS);
  });
};
