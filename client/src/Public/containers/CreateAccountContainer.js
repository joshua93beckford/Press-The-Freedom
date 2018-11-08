import {connect} from 'react-redux';
import CreateAccount from '../components/CreateAccount';
import {createUser, createUserReset, userCreationStatus as status} from '../../actions/createUser';

const mapStateToProps = state => {
  const {userCreationStatus, errorMsg} = state.userCreation;
  const buttonText = userCreationStatus === status.IN_PROGRESS ? '◌' : 'Create Account';
  return {
    userCreationStatus,
    errorMsg,
    buttonText
  };
} 

const mapDispatchToProps = dispatch => {
  return {
    createAccount: userInput => {
      dispatch(createUser(userInput));
    },
    reset: () => {
      dispatch(createUserReset());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);