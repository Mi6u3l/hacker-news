import { HackerNewsPage } from './app.po';

describe('hacker-news App', () => {
  let page: HackerNewsPage;

  beforeEach(() => {
    page = new HackerNewsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
