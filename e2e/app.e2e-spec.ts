import { NgAnimPage } from './app.po';

describe('ng-anim App', () => {
  let page: NgAnimPage;

  beforeEach(() => {
    page = new NgAnimPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
