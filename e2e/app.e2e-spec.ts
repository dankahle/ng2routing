import { Ng2routingPage } from './app.po';

describe('ng2routing App', function() {
  let page: Ng2routingPage;

  beforeEach(() => {
    page = new Ng2routingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
