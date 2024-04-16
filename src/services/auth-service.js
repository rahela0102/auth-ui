const USERS_KEY = 'registered_users';
const AUTH_USER_KEY = 'auth_user';

class AuthService {
  register(data) {
    const registeredUsers = this.getUserList();

    const match = registeredUsers.find(user => user.email === data.email);

    if (match) {
      throw new Error('this email is already taken');
    }

    registeredUsers.push(data);

    localStorage.setItem(USERS_KEY, JSON.stringify(registeredUsers));
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data));
  }

  login(data) {
    const registeredUsers = this.getUserList();

    const match = registeredUsers.find(
      user => user.email === data.email && user.password === data.password,
    );

    if (!match) {
      throw new Error('incorrect credentials');
    }

    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(match));
  }

  logout() {
    localStorage.removeItem(AUTH_USER_KEY);
  }

  getUserList() {
    const registeredUsers = JSON.parse(localStorage.getItem(USERS_KEY));

    return registeredUsers ?? [];
  }

  getAuthUser() {
    return JSON.parse(localStorage.getItem(AUTH_USER_KEY));
  }
}

export const authService = new AuthService();
