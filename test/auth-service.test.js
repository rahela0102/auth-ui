import { expect } from '@open-wc/testing';
import { authService } from '../src/services/auth-service.js';

const registrationData = {
  firstName: 'test',
  lastName: 'last name',
  email: 'test@test.com',
  password: 'test',
};

describe('auth service', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('registers user', () => {
    authService.register(registrationData);

    expect(authService.getAuthUser()).to.eql(registrationData);
  });

  it('throws error when email is taken', () => {
    authService.register(registrationData);

    expect(() => authService.register(registrationData)).to.throw(
      Error,
      'This email is already taken',
    );
  });

  it('login user', () => {
    authService.register(registrationData);
    authService.logout();
    authService.login({ email: 'test@test.com', password: 'test' });

    expect(authService.getAuthUser()).to.eql(registrationData);
  });

  it('throws error when credentials are invalid', () => {
    authService.register(registrationData);
    authService.logout();

    expect(() =>
      authService.login({ email: 'test2@tets.com', password: 'test' }),
    ).to.throw(Error, 'Incorrect credentials');
  });
});
