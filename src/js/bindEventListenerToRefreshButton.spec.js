import '@testing-library/jest-dom';
import { bindEventListenerToRefreshButton } from './bindEventListenerToRefreshButton';
import { getNextJokeIdx } from './getNextJokeIdx';
import { addNextJoke } from './addNextJoke';

jest.mock('./getNextJokeIdx', () => ({
  ...jest.requireActual('./getNextJokeIdx'),
  getNextJokeIdx: jest.fn(),
}));

jest.mock('./addNextJoke', () => ({
  ...jest.requireActual('./addNextJoke'),
  addNextJoke: jest.fn().mockResolvedValue(),
}));

describe('bindEventListenerToRefreshButton', () => {
  let refreshButton;

  beforeEach(() => {
    document.body.innerHTML = `
    <button id="refresh">Refresh</button>
    `;
  });

  it('calls getNextJokeIdx with the current joke index', () => {
    bindEventListenerToRefreshButton(1);
    refreshButton = document.getElementById('refresh');

    refreshButton.click();

    expect(getNextJokeIdx).toHaveBeenCalledWith(1);
  });

  it('calls addNextJoke with the updated joke index', () => {
    bindEventListenerToRefreshButton(1);
    refreshButton = document.getElementById('refresh');

    refreshButton.click();

    expect(addNextJoke).toHaveBeenCalled();
  });
});
