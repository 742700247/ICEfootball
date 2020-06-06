import { dataPipe } from './data.pipe';

describe('dataPipe', () => {
  it('create an instance', () => {
    const pipe = new dataPipe();
    expect(pipe).toBeTruthy();
  });
});
