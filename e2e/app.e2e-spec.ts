import { SiteAngularUiPage } from './app.po';

describe('site-angular-ui App', function() {
  let page: SiteAngularUiPage;

  beforeEach(() => {
    page = new SiteAngularUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
