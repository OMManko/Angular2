import { NewsFilterPipe } from './news-filter.pipe';

describe('NewFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new NewsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
