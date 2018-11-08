import {connect} from 'react-redux';
import TopSources from '../components/TopSources';
import {getTopSources} from '../../actions/getSources';

const mapStateToProps = state => {
  return {
    sources: state.topSources,
    showLess: 3,
    showMore: 10
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getTopSources: () => {
      dispatch(getTopSources());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopSources)