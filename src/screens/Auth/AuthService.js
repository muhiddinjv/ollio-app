class AuthService {
  static instance = null;
  signOutHandler = null;

  constructor() {
    if (AuthService.instance) {
      return AuthService.instance;
    }
    AuthService.instance = this;
  }

  setSignOutHandler(handler) {
    this.signOutHandler = handler;
  }

  async signOut() {
    if (this.signOutHandler) {
      await this.signOutHandler();
    } else {
      console.log('No signOutHandler found');
    }
  }
}

export const authService = new AuthService();
