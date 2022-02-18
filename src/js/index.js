import '../css/index.css';
import { jokeFetcher } from './jokeFetcher';
import { renderJoke } from './renderJoke';

const main = async () => {
  const joke = await jokeFetcher();
  renderJoke(joke);
};
main();
