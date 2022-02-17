/* eslint-disable no-undef */
import { getUpperBound } from './upperBound';

describe('UpperBound', () => {
  it('returns the count of all the jokes', () => {
    console.log(getUpperBound());
    const joke = getUpperBound();
    expect(joke).toBe(30);
  });
});
