import { AngularTPage } from './app.po';

describe('angular-t App', () => {
  let page: AngularTPage;

  beforeEach(() => {
    page = new AngularTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
