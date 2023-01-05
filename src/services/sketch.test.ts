import { getScript, loadScript } from "./sketch";

it('fails to load a script', async () => {
  expect.assertions(1);
  try {
    await loadScript('/scripts/nonsenseUrl');
  } catch (e) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(e).toMatch('error');
  }

});

it('succeeds loading RAMP script', async () => {
  
});