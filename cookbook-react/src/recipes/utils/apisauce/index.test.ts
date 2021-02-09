import { rest } from 'msw';
import { setupServer } from 'msw/node';

import api, { apiSetup } from '.';

const onResponseMock = jest.fn();

interface Body {
  camelCaseField: string;
}
interface Response {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  snake_case_field: string;
}

const server = setupServer(
  rest.post<Body>('/endpoint', (req, res, ctx) =>
    res(
      ctx.json<Response>({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        snake_case_field: 'snake_case_field'
      })
    )
  )
);

beforeAll(() => {
  apiSetup(onResponseMock);

  server.listen();
});

afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});

test('calls the global response callback after a response', async () => {
  await api.post('/endpoint');
  expect(onResponseMock).toHaveBeenCalled();
});

test('does not map when there is no response body', async () => {
  server.use(rest.post('/endpoint', (req, res) => res.once()));
  const response = await api.post('/endpoint');
  expect(response.data).toBe(null);
});

test('maps the response to camelcase when it exists', async () => {
  const response = await api.post('/endpoint');
  expect(response.data).toEqual({ snakeCaseField: 'snake_case_field' });
});

test('maps the request to snakecase when it exists', async () => {
  let requestBody = null;
  server.use(
    rest.post('/endpoint', (req, res, ctx) => {
      requestBody = req.body;
      return res.once(
        ctx.json<Response>({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          snake_case_field: 'snake_case_field'
        })
      );
    })
  );
  await api.post('/endpoint', { camelCaseField: 'camel_case_field' });
  // eslint-disable-next-line @typescript-eslint/naming-convention
  expect(requestBody).toEqual({ camel_case_field: 'camel_case_field' });
});
