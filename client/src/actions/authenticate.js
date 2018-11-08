import {resetRecentArticles} from './addRecentArticle';
import {searchReset} from './searchArticles';

// action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_COMPLETE = 'LOGOUT_COMPLETE';

export const loginStatus = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT',
  IN_PROGRESS: 'IN_PROGRESS'
}

// action creators
export function loginUser(credentials) {
  return dispatch => {
    dispatch(requestLogin());
    fetch('/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(credentials)
    }).then(response => {
      if(response.ok) {
        response.json().then(response => {
          if(!response.validate) {
            dispatch(loginFail('User authentication failed.'))
          } else {
            localStorage.setItem('idToken', response.token);
            dispatch(loginSuccess(response.username));
          }
        })
      }
    })
  }
}

export function requestLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export function loginFail(msg) {
  return {
    type: LOGIN_FAIL,
    msg
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('idToken');
    dispatch(searchReset());
    dispatch(resetRecentArticles());
    dispatch(logoutComplete());
  }
}

export function logoutComplete() {
  return {
    type: LOGOUT_COMPLETE
  }
}

