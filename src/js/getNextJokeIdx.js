export const getNextJokeIdx = (currentJokeIdx, upperBound) => {
  let nextJokeIdx = currentJokeIdx + 1;

  if (nextJokeIdx > upperBound) nextJokeIdx = 0;

  return nextJokeIdx;
};
