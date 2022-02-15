import getJokes from './jokes';

describe('getJokes', () => {
  it('returns joke at index 12 when passing in 12 as argument', () => {
    const joke = getJokes(12);
    expect(joke.setup).toBe('How many apples grow on a tree?');
  });
});
