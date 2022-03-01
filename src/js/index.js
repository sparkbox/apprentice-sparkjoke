import '../css/index.css';
import { jokeFetcher } from './jokeFetcher';
import { jokeFetcherUpperBounds } from './jokeFetcher';
import { renderJoke } from './renderJoke';
import { bindEventListenerToRefreshButton } from './bindEventListenerToRefreshButton';

const showInitialJoke = async () => {
  const upperBounds = await jokeFetcherUpperBounds();

  const jokeIndex = Math.floor(Math.random() * upperBounds + 1);

  const initialJoke = await jokeFetcher(jokeIndex);

  renderJoke(initialJoke);
  bindEventListenerToRefreshButton(jokeIndex);
};

showInitialJoke();
