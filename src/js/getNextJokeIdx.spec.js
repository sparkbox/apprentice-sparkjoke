import { getNextJokeIdx } from './getNextJokeIdx';

describe('getNextJokeIdx', () => {
  it('incremements the current joke idx by 1', () => {
    const nextJokeIdx = getNextJokeIdx(2);

    expect(nextJokeIdx).toBe(3);
  });

  it('resets current joke idx to 0 when upper bound is reached', () => {
    const nextJokeIdx = getNextJokeIdx(4, 4);

    expect(nextJokeIdx).toBe(0);
  });
});
