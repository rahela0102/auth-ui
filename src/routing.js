import { Router } from '@vaadin/router';
import './pages/register-page/register-page.js';
import './pages/login-page/login-page.js';
import './pages/user-details-page/user-details-page.js';

const router = new Router(document.querySelector('#outlet'));
router.setRoutes([
  { path: '/register', component: 'register-page' },
  { path: '/login', component: 'login-page' },
  { path: '/user-details', component: 'user-details-page' },
  { path: '(.*)', redirect: '/register' },
]);
