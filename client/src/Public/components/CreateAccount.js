import React from 'react';
import {userCreationStatus} from '../../actions/createUser';
import login from '../../assets/css/Login.module.css';

class CreateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameInput: '',
      emailInput: '',
      passwordInput: '',
      confirmPasswordInput: '',
      passwordFieldsMatch: true,
      passwordLongEnough: true,
      validEmail: true
    }
  }

  componentDidMount() {
    this.props.reset();
  }

  componentDidUpdate() {
    if(this.props.userCreationStatus === userCreationStatus.USER_CREATED) {
      this.props.history.push('/signin');
    }
  }

  render() {
    return (
      <section className={login.section}>
        <div>Welcome! Please complete all fields.</div>
        <form>
          <input type='text' placeholder='Your name' maxLength='20' autoComplete='fname'
            value={this.state.usernameInput}
            onChange={e => this.setState({usernameInput: e.target.value})}>
          </input>
          <input type='text' placeholder='Email Address' maxLength='35' autoComplete='email'
            value={this.state.emailInput}
            onChange={e => {
              let regex = /.+@.+\..+/;
              this.setState({
                emailInput: e.target.value,
                validEmail: !e.target.value.length || regex.test(e.target.value)
              })
            }}>
          </input>
          <input type='password' placeholder='Password' maxLength='12' autoComplete='new-password'
            value={this.state.passwordInput}
            onChange={e => {
              this.setState({
                passwordInput: e.target.value,
                passwordFieldsMatch: e.target.value === this.state.confirmPasswordInput,
                passwordLongEnough: !e.target.value.length || e.target.value.length > 5
              })
            }}>
          </input>
          <input type='password' placeholder='Confirm Password' maxLength='12' autoComplete='new-password'
            value={this.state.confirmPasswordInput}
            onChange={e => {
              this.setState({
                confirmPasswordInput: e.target.value,
                passwordFieldsMatch: e.target.value === this.state.passwordInput
              })
            }}>
          </input>
          <div className='msg'>
            {!this.state.passwordFieldsMatch && (
              <span>Password fields must match.</span>
            )}
            {!this.state.passwordLongEnough && (
              <span>Password must be at least 6 characters long.</span>
            )}
            {!this.state.validEmail && (
              <span>Please enter a valid email address.</span>
            )}
          </div>
          <div>
            <span className='button' onClick={e => this.props.createAccount(this.state)}>{this.props.buttonText}</span>
            <span className='button' onClick={e => this.props.history.push('/signin')}>Back to Login</span>
          </div>
        </form>
        {this.props.errorMsg && (
          <div className='msg'>{this.props.errorMsg}</div>
        )}
      </section>
    )
  }
}

export default CreateAccount;