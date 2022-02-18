export const jokeFetcher = async () => {
  try {
    const result = await fetch('http://localhost:8081/jokes/0');
    console.log(result);
    const joke = await result.json();
    console.log(joke);
    return joke;
  } catch (err) {
    console.log(err);
    return {
      setup: 'Sorry, we were unable to reterive a joke',
      punchline: 'Sadly this is not a joke',
    };
  };
};
