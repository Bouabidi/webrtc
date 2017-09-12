import { StreamAppPage } from './app.po';

describe('stream-app App', () => {
  let page: StreamAppPage;

  beforeEach(() => {
    page = new StreamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
