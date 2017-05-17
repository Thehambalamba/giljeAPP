import { GiljeAPPPage } from './app.po';

describe('gilje-app App', () => {
  let page: GiljeAPPPage;

  beforeEach(() => {
    page = new GiljeAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
