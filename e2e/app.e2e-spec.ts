import { AutoproPage } from './app.po';

describe('autopro App', () => {
  let page: AutoproPage;

  beforeEach(() => {
    page = new AutoproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
