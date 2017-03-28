import { Ng2DynaFormPage } from './app.po';

describe('ng2-dyna-form App', () => {
  let page: Ng2DynaFormPage;

  beforeEach(() => {
    page = new Ng2DynaFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
