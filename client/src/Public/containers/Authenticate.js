import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {loginStatus} from '../../actions/authenticate';

export default function(ProtectedComponent) {
  class Authenticate extends React.Component {
    render() {
      return this.props.loginStatus === loginStatus.LOGGED_IN ?
        <ProtectedComponent /> : <Redirect to='/signin' />;
    }
  }

  const mapStateToProps = state => {
    return {
      loginStatus: state.userAuthentication.loginStatus
    }
  }

  const mapDispatchToProps = dispatch => {
    return {};
  };

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}