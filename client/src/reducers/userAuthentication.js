import {
  loginStatus, 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, 
  LOGOUT_REQUEST, LOGOUT_COMPLETE
} from '../actions/authenticate';

const userAuthentication = 
  (state = {loginStatus: localStorage.getItem('idToken') ? 
    loginStatus.LOGGED_IN: loginStatus.LOGGED_OUT}, action) => {
      switch(action.type) {
        case LOGIN_REQUEST:
          return Object.assign({}, state, {
            loginStatus: loginStatus.IN_PROGRESS,
            errorMsg: '',
            currentUser: null
          });
        case LOGIN_SUCCESS:
          return Object.assign({}, state, {
            loginStatus: loginStatus.LOGGED_IN,
            errorMsg: '',
            currentUser: action.user
          })
        case LOGIN_FAIL:
          return Object.assign({}, state, {
            loginStatus: loginStatus.LOGGED_OUT,
            errorMsg: action.msg,
            currentUser: null
          })
        case LOGOUT_REQUEST: 
          return Object.assign({}, state, {
            loginStatus: loginStatus.IN_PROGRESS
          })
        case LOGOUT_COMPLETE:
          return Object.assign({}, state, {
            loginStatus: loginStatus.LOGGED_OUT,
            errorMsg: '',
            currentUser: null
          })
        default:
          return state;
      }
}

export default userAuthentication;