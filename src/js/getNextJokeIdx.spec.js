import { getNextJokeIdx } from './getNextJokeIdx';
import { jokeFetcherUpperBounds } from './jokeFetcher';

jest.mock('./jokeFetcher', () => ({
  ...jest.requireActual('./jokeFetcher'),
  jokeFetcherUpperBounds: jest.fn().mockReturnValue(29),
}));

describe('getNextJokeIdx', () => {
  it('incremements the current joke idx by 1', async () => {
    const nextJokeIdx = await getNextJokeIdx(2);

    expect(nextJokeIdx).toBe(3);
  });

  it('resets current joke idx to 0 when upper bound is reached', async () => {
    const upperBounds = await jokeFetcherUpperBounds();
    const nextJokeIdx = await getNextJokeIdx(upperBounds);

    expect(nextJokeIdx).toBe(0);
  });
});
