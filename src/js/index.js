import '../css/index.css';
import { jokeFetcher, jokeFetcherUpperBounds } from './jokeFetcher';
import { renderJoke } from './renderJoke';
import { getNextJokeIdx } from './getNextJokeIdx';

const addNextJoke = async (nextJokeIdx) => {
  const nextJoke = await jokeFetcher(nextJokeIdx);

  renderJoke(nextJoke);
};

const bindEventListenerToRefreshButton = async (currentJokeIdx) => {
  const refreshButton = document.getElementById('refresh');
  let currentJokeState = currentJokeIdx;
  const UPPER_BOUND = await jokeFetcherUpperBounds();

  refreshButton.addEventListener('click', async (e) => {
    e.preventDefault();
    currentJokeState = getNextJokeIdx(currentJokeState, UPPER_BOUND);
    addNextJoke(currentJokeState);
  });
};

const showCurrentJoke = async () => {
  const currentJokeIdx = 0;
  const currentJoke = await jokeFetcher(currentJokeIdx);

  renderJoke(currentJoke);
  bindEventListenerToRefreshButton(currentJokeIdx);
};

showCurrentJoke();
