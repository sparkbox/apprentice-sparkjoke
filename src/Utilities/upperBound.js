const jokeData = require('../../api/jokes.json');

function getUpperBound() {
  console.log(jokeData.length);
  return jokeData.length - 1;
}

module.exports = getUpperBound();
