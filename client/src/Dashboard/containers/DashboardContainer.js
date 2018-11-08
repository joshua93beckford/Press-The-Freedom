import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';
import {logout} from '../../actions/authenticate';

const mapStateToProps = state => {
  return {
    recentArticles: state.recentArticles,
    topSources: [],
    showModal: state.modal.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verifyTokenFailed: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);