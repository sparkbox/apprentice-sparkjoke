export const jokeFetcher = async (jokeIdx) => {
  try {
    const result = await fetch(`http://localhost:8081/jokes/${jokeIdx}`);
    const joke = await result.json();
    return joke;
  } catch (err) {
    return {
      setup: 'Sorry, we were unable to retrieve a joke',
      punchline: 'Sadly this is not a joke',
    };
  }
};
