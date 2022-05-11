class TokenService {
  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.accessToken;
  }
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.refreshToken;
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  setUser(user) {
    console.log(JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(user));
  }
  removeUser() {
    localStorage.removeItem('user');
  }
}

export default new TokenService();
