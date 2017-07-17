import { DemoNgTodo0717Page } from './app.po';

describe('demo-ng-todo0717 App', () => {
  let page: DemoNgTodo0717Page;

  beforeEach(() => {
    page = new DemoNgTodo0717Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
