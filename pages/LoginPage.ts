import { Selector,t } from 'testcafe';


export default class LoginPage {
  readonly usernameInput: Selector;
  readonly passwordInput: Selector;
  readonly loginButton: Selector;

  constructor() {
    this.usernameInput = Selector('#user-name');
    this.passwordInput = Selector('#password');
    this.loginButton = Selector('.btn_action');
  }

  //Login to the system with given credentials.
  public async login(username: string, password: string): Promise<void> {
    await t.typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginButton);
  }
}
