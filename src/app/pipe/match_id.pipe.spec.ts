import { matchIdPipe } from './match_id.pipe';

describe('matchIdPipe', () => {
  it('create an instance', () => {
    const pipe = new matchIdPipe();
    expect(pipe).toBeTruthy();
  });
});
