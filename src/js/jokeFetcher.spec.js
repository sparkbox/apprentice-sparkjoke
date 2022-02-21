import { jokeFetcher } from './jokeFetcher';

const defaultFetchReference = global.fetch;

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      setup: 'Why did the chicken cross the playground?',
      punchline: 'To get to the other slide.',
    }),
  }));
});

afterEach(() => {
  global.fetch = defaultFetchReference;
});

describe('jokeFetcher', () => {
  it('fetches joke', async () => {
    const joke = await jokeFetcher(0);
    expect(joke).toEqual({
      setup: 'Why did the chicken cross the playground?',
      punchline: 'To get to the other slide.',
    });
  });

  it('makes a call to the correct API endpoint', async () => {
    await jokeFetcher(3);

    expect(fetch).toHaveBeenCalledWith('http://localhost:8081/jokes/3');
  });

  it('returns error message on failure', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Some Failure')));
    const joke = await jokeFetcher();
    expect(joke).toEqual({
      setup: 'Sorry, we were unable to retrieve a joke',
      punchline: 'Sadly this is not a joke',
    });
  });
});
