# Overview

Basic authentication system made using [Lit](https://lit.dev/), and [Lion](https://lion-web.netlify.app/). The project was generated using [Open Web Components](https://open-wc.org/docs/development/generator/). The routing was made using [Vaadin router](https://github.com/vaadin/router).

### User registration

- Users enter first name, last name, email and password
- Check if the email is not already taken
- If not taken, the given data is stored in local storage

### User login

- Users enter their credentials
- Check if the entered credentials match the stored ones.
- If matched, the users are logged in and have access to their account information

### User logout

- Users click on the logout button
- Invalidate the user's session and redirect them to the login page

# Getting Started

### Project install

Clone this repository to your desired folder:

```
git clone https://github.com/rahela0102/auth-ui.git
```

Navigate to your cloned project:

```
cd auth-ui
```

Install node modules:

```
npm install
```

Start the project:

```
npm run start
```

### Testing

Run tests:

```
npm run test
```
