import { teamIdPipe } from './team_id.pipe';

describe('teamIdPipe', () => {
  it('create an instance', () => {
    const pipe = new teamIdPipe();
    expect(pipe).toBeTruthy();
  });
});
