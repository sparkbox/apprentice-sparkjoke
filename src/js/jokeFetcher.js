export const jokeFetcher = async () => {
  try {
    const result = await fetch('http://localhost:8081/jokes/0');
    const joke = await result.json();
    return joke;
  } catch (err) {
    return {
      setup: 'Sorry, we were unable to retrieve a joke',
      punchline: 'Sadly this is not a joke',
    };
  }
};