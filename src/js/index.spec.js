import '@testing-library/jest-dom';
import { renderJoke } from './renderJoke';
import { showInitialJoke } from './index.js';
import { bindEventListenerToRefreshButton } from './bindEventListenerToRefreshButton';
import { jokeFetcher, jokeFetcherUpperBounds } from './jokeFetcher';

jest.mock('./renderJoke', () => ({
  ...jest.requireActual('./renderJoke'),
  renderJoke: jest.fn(),
}));

jest.mock('./bindEventListenerToRefreshButton', () => ({
  ...jest.requireActual('./bindEventListenerToRefreshButton'),
  bindEventListenerToRefreshButton: jest.fn(),
}));

jest.mock('./jokeFetcher', () => ({
  ...jest.requireActual('./jokeFetcher'),
  jokeFetcher: jest.fn(),
  jokeFetcherUpperBounds: jest.fn(),
}));

describe('showInitialJoke', () => {
  it('calls jokeFetcherUpperBounds', () => {
    showInitialJoke();

    expect(jokeFetcherUpperBounds).toHaveBeenCalled();
  });

  it('calls jokeFetcher', () => {
    showInitialJoke();

    expect(jokeFetcher).toHaveBeenCalled();
  });

  it('calls renderJoke', () => {
    showInitialJoke();

    expect(renderJoke).toHaveBeenCalled();
  });

  it('calls bindEventListenerToRefreshButton', () => {
    showInitialJoke();

    expect(bindEventListenerToRefreshButton).toHaveBeenCalled();
  });
});
