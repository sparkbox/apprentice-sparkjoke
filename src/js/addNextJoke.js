import { jokeFetcher } from './jokeFetcher';
import { renderJoke } from './renderJoke';

export const addNextJoke = async (nextJokeIdx) => {
  const nextJoke = await jokeFetcher(nextJokeIdx);

  renderJoke(nextJoke);
};
