import { jokeFetcherUpperBounds } from './jokeFetcher';

export const getNextJokeIdx = async (currentJokeIdx) => {
  const upperBound = await jokeFetcherUpperBounds();
  let nextJokeIdx = currentJokeIdx + 1;

  if (nextJokeIdx > upperBound) nextJokeIdx = 0;

  return nextJokeIdx;
};
