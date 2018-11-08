import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import TopSourcesContainer from '../containers/TopSourcesContainer';
import RecentArticlesContainer from '../containers/RecentArticlesContainer';
import RateModalContainer from '../containers/RateModalContainer';

class Dashboard extends React.Component {

  componentDidMount() {
    this.verifyToken();
  }

  verifyToken() {
    let token = localStorage.getItem('idToken');
    fetch('/auth', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(response => {
      if(response.ok) {
        response.json().then(data => {
          if(data.status !== '200') {
            this.props.verifyTokenFailed();
          }
        }).catch(err => console.log(err));
      }
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <SearchContainer/>

        {Boolean(this.props.recentArticles.length) && (
          <RecentArticlesContainer />
        )}
        
        <TopSourcesContainer />

        {this.props.showModal && (
          <RateModalContainer />
        )}
      </div>
    )
  }
}

export default Dashboard;






















