import {connect} from 'react-redux';
import Article from '../components/Article';
import {addRecentArticle} from '../../actions/addRecentArticle';
import {showModal} from '../../actions/rateArticle';

const mapStateToProps = state => {
  return {
    sourcesMap: state.sources
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToRecentArticles: article => {
      dispatch(addRecentArticle(article));
    },
    rateArticle: sourceid => {
      dispatch(showModal(sourceid))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);