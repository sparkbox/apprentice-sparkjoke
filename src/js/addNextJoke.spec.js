import { addNextJoke } from './addNextJoke';
import { jokeFetcher } from './jokeFetcher';
import { renderJoke } from './renderJoke';

jest.mock('./jokeFetcher', () => ({
  ...jest.requireActual('./jokeFetcher'),
  jokeFetcher: jest.fn().mockResolvedValue(),
}));

jest.mock('./renderJoke', () => ({
  ...jest.requireActual('./renderJoke'),
  renderJoke: jest.fn(),
}));

describe('addNextJoke', () => {
  it('calls jokeFetcher with next joke index', () => {
    addNextJoke(1);

    expect(jokeFetcher).toHaveBeenCalledWith(1);
  });

  it('calls addNextJoke with the updated joke index', () => {
    addNextJoke(1);

    expect(renderJoke).toHaveBeenCalled();
  });
});
