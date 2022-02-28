import '../css/index.css';
import { jokeFetcher } from './jokeFetcher';
import { jokeFetcherUpperBounds } from './jokeFetcher';
import { renderJoke } from './renderJoke';
import { bindEventListenerToRefreshButton } from './bindEventListenerToRefreshButton';

const showInitialJoke = async () => {
  const upperBounds = await jokeFetcherUpperBounds();
  const initialJoke = await jokeFetcher(
    Math.floor(Math.random() * upperBounds + 1)
  );

  renderJoke(initialJoke);
  bindEventListenerToRefreshButton(0);
};

showInitialJoke();
