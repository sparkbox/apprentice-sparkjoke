import { getNextJokeIdx } from './getNextJokeIdx';
import { addNextJoke } from './addNextJoke';

export const bindEventListenerToRefreshButton = (currentJokeIdx) => {
  const refreshButton = document.getElementById('refresh');
  let currentJokeState = currentJokeIdx;

  refreshButton.addEventListener('click', async (e) => {
    e.preventDefault();
    currentJokeState = await getNextJokeIdx(currentJokeState);
    addNextJoke(currentJokeState);
  });
};
