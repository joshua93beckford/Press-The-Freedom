import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderContainer from './Public/containers/HeaderContainer';
import LoginContainer from './Public/containers/LoginContainer';
import CreateAccountContainer from './Public/containers/CreateAccountContainer';
import Authenticate from './Public/containers/Authenticate';
import DashboardContainer from './Dashboard/containers/DashboardContainer';
import './assets/css/App.css';

class App extends React.Component {
  render() {
    return (
   
      <div>
        <HeaderContainer />
        <main>
          <Router>
            <Switch>
              <Route path='/signin' component={LoginContainer} />
              <Route path='/signup' component={CreateAccountContainer} />
              <Route path='/' component={Authenticate(DashboardContainer)} />
            </Switch>
          </Router>
        </main>
        <div id='background'></div>
      </div>
      
    );
  }
}

export default App;
