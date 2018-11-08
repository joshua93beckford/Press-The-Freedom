import {
  userCreationStatus, CREATEUSER_RESET, CREATEUSER_REQUEST, CREATEUSER_SUCCESS, CREATEUSER_FAIL
} from '../actions/createUser';

const userCreation = (state = {
  userCreationStatus: userCreationStatus.NONE
}, action) => {
  switch(action.type) {
    case CREATEUSER_RESET:
      return {
        userCreationStatus: userCreationStatus.NONE,
        errorMsg: ''
      }
    case CREATEUSER_REQUEST:
      return {
        userCreationStatus: userCreationStatus.IN_PROGRESS,
        errorMsg: ''
      }
    case CREATEUSER_SUCCESS:
      return {
        userCreationStatus: userCreationStatus.USER_CREATED
      }
    case CREATEUSER_FAIL:
      return {
        userCreationStatus: userCreationStatus.FAILED,
        errorMsg: action.msg
      }
    default:
      return state;
  }
}

export default userCreation;