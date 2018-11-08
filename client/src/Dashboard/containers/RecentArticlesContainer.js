import {connect} from 'react-redux';
import RecentArticles from '../components/RecentArticles';

const mapStateToProps = state => {
  return {
    articles: state.recentArticles
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentArticles);