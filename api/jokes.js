const jokeData = require('./jokes.json');

export function getJokes(jokeIdx) {
  return jokeData[jokeIdx];
}
