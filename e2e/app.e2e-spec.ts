import {SiteUiPage} from "./app.po";

describe('site-ui App', function() {
  let page: SiteUiPage;

  beforeEach(() => {
    page = new SiteUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
