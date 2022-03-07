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
    jest.clearAllMocks();
    
    showInitialJoke();
    
    expect(jokeFetcherUpperBounds).toHaveBeenCalledTimes(1);
  });
  
  it('calls jokeFetcher', () => {

    expect(jokeFetcher).toHaveBeenCalledTimes(1);
  });

  it('calls renderJoke', () => {

    expect(renderJoke).toHaveBeenCalledTimes(1);
  });

  it('calls bindEventListenerToRefreshButton', () => {

    expect(bindEventListenerToRefreshButton).toHaveBeenCalledTimes(1);
  });
});
