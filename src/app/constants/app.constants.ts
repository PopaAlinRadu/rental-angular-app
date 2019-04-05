// Token
export const TOKEN = 'JWT';
export const AUTHENTICATED_USER = 'AuthenticatedUser';
export const ACCOUNT_ID = 'AccountId';
export const BEARER = 'Bearer';

// API - users
export const API_USERS_BASE = 'http://localhost:8080/api/users';
export const API_USERS_SIGN_IN = '/signIn';
export const API_USERS_SIGN_UP = '/signUp';
export const API_USERS_ME = `${API_USERS_BASE}/me`;

// API - articles
export const API_ARTICLES_BASE = 'http://localhost:8081/api/articles';

// Routes
export const ROUTE_ARTICLES = 'articles';
export const ROUTE_LOGIN = 'login';
export const ROUTE_REGISTER = 'register';
export const ROUTE_MY_ACCOUNT = 'myAccount';
export const ROUTE_ADD_ARTICLE = `${ROUTE_MY_ACCOUNT}/article`;
