import { BmongPlaygroundPage } from './app.po';

describe('bmong-playground App', () => {
  let page: BmongPlaygroundPage;

  beforeEach(() => {
    page = new BmongPlaygroundPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
