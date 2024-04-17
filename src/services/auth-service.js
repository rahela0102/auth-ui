const USERS_KEY = 'registered_users';
const AUTH_USER_KEY = 'auth_user';

class AuthService {
  register(data) {
    const registrationData = this.prepareCredentials(data);

    this.validateRegistrationData(registrationData);
    this.registerUser(registrationData);

    this.saveAuthenticatedUser(data);
  }

  login(data) {
    const loginData = this.prepareCredentials(data);

    const match = this.findMatchingUserOrFail(loginData);

    this.saveAuthenticatedUser(match);
  }

  logout() {
    localStorage.removeItem(AUTH_USER_KEY);
  }

  getAuthUser() {
    return JSON.parse(localStorage.getItem(AUTH_USER_KEY));
  }

  getRegisteredUsers() {
    const registeredUsers = JSON.parse(localStorage.getItem(USERS_KEY));

    return registeredUsers ?? [];
  }

  saveAuthenticatedUser(user) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  }

  registerUser(data) {
    const registeredUsers = this.getRegisteredUsers();

    registeredUsers.push(data);

    localStorage.setItem(USERS_KEY, JSON.stringify(registeredUsers));
  }

  prepareCredentials(data) {
    return {
      ...data,
      email: data.email.toLowerCase(),
    };
  }

  validateRegistrationData(data) {
    const registeredUsers = this.getRegisteredUsers();

    const match = registeredUsers.find(user => user.email === data.email);

    if (match) {
      throw new Error('This email is already taken');
    }
  }

  findMatchingUserOrFail(data) {
    const registeredUsers = this.getRegisteredUsers();

    const match = registeredUsers.find(
      user => user.email === data.email && user.password === data.password,
    );

    if (!match) {
      throw new Error('Incorrect credentials');
    }

    return match;
  }
}

export const authService = new AuthService();
