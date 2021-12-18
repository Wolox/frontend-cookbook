import { getList } from './listService';

describe('Service List Elements', () => {
  test('Returns the number of items requested', async () => {
    const elementsForPage = 25;

    const list = await getList({
      skip: 0,
      limit: elementsForPage
    });

    expect(list.data?.list.length).toBe(elementsForPage);
  });
});
