const jokeData = require('../../api/jokes.json');

function getUpperBound() {
  console.log(jokeData.length);
  return jokeData.length;
}

export { getUpperBound };
