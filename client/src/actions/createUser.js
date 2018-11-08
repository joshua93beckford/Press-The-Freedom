import {loginSuccess} from './authenticate';

// action types
export const CREATEUSER_RESET = 'CREATEUSER_RESET';
export const CREATEUSER_REQUEST = 'CREATEUSER_REQUEST';
export const CREATEUSER_SUCCESS = 'CREATEUSER_SUCCESS';
export const CREATEUSER_FAIL = 'CREATEUSER_FAIL';

export const userCreationStatus = {
  NONE: 'NONE',
  IN_PROGRESS: 'IN_PROGRESS',
  USER_CREATED: 'USER_CREATED',
  FAILED: 'FAILED'
}

// action creators
export function createUserReset() {
  return {
    type: CREATEUSER_RESET
  }
}

export function createUser(containerState) {
  return dispatch => {
    let {usernameInput, emailInput, passwordInput, passwordFieldsMatch, validEmail} = containerState;
    if(!(usernameInput.length && emailInput.length && passwordInput.length > 5)) {
      dispatch(createUserFail('All fields are required.'))
    } else if(passwordFieldsMatch && validEmail) {
      dispatch(createUserRequest());
      fetch('/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          username: usernameInput,
          email: emailInput,
          password: passwordInput
        })
      }).then(response => {
        if(response.ok) {
          response.json().then(data => {
            if(data.err) {
              dispatch(createUserFail(data.err))
            } else {
              if(!data.validate) {
                dispatch(createUserFail('Database error.'))
              } else {
                localStorage.setItem('idToken', data.token)
                dispatch(loginSuccess(data.username));
                dispatch(createUserSuccess());
              }
            }
          })
        }
      })
    }
  }
}

function createUserRequest() {
  return {
    type: CREATEUSER_REQUEST,
    userCreationStatus: userCreationStatus.IN_PROGRESS
  }
}

function createUserFail(msg) {
  return {
    type: CREATEUSER_FAIL,
    msg
  }
}

function createUserSuccess() {
  return {
    type: CREATEUSER_SUCCESS
  }
}