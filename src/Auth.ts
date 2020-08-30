class Auth {
  public authData: any;
  public isCorrect: boolean;
  protected updateAuthDataCallback?: Function;

  constructor(updateAuthData?: Function) {
    this.updateAuthDataCallback = updateAuthData;
    this.updateAuthData();
  }

  public updateAuthData()
  {
    if (this.updateAuthDataCallback) {
      this.authData = this.updateAuthDataCallback.apply(null);
    }

    this.isCorrect = !!this.authData;
  }
}

export default Auth;
