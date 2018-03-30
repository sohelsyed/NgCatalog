import { NgCatalogPage } from './app.po';

describe('ng-catalog App', () => {
  let page: NgCatalogPage;

  beforeEach(() => {
    page = new NgCatalogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
