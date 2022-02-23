import '../css/index.css';
import { jokeFetcher } from './jokeFetcher';
import { renderJoke } from './renderJoke';
import { bindEventListenerToRefreshButton } from './bindEventListenerToRefreshButton';

const showInitialJoke = async () => {
  const initialJoke = await jokeFetcher();

  renderJoke(initialJoke);
  bindEventListenerToRefreshButton();
};

showInitialJoke();
