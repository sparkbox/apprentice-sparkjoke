export const jokeFetcher = async () => {
  try {
    const result = await fetch('http://localhost:8081/jokes');
    const joke = await result.json();
    return joke;
  } catch (err) {
    return {
      setup: 'Sorry, we were unable to reterive a joke',
      punchline: 'Sadly this is not a joke',
    };
  }
};
