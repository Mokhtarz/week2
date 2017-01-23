import { Week2Page } from './app.po';

describe('week2 App', function() {
  let page: Week2Page;

  beforeEach(() => {
    page = new Week2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
