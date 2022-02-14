import '@testing-library/jest-dom';
import { renderJoke } from './index.js';

describe('Index.js', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div id="setup"></div>
    <div id="punchline"></div>
    `;
  });

  it('renderJoke renders setup', () => {
    renderJoke();
    const setupDiv = document.getElementById('setup');
    expect(setupDiv.innerText).toBe('Why did the chicken cross the road?');
  });

  it('renderJokes renders setup', () => {
    renderJoke();
    const punchlineDiv = document.getElementById('punchline');
    expect(punchlineDiv.innerText).toBe('To get to the other side.');
  });
});
