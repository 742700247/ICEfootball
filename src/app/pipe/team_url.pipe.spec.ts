import { teamUrlPipe } from './team_url.pipe';

describe('teamUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new teamUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
