import { HelloCapelinAppPage } from './app.po';

describe('hello-capelin-app App', function() {
  let page: HelloCapelinAppPage;

  beforeEach(() => {
    page = new HelloCapelinAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
