import {connect} from 'react-redux';
import RateModal from '../components/RateModal';
import {submitRating, hideModal} from '../../actions/rateArticle';

const mapStateToProps = state => {
  return {
    source: state.modal.source
  };
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(hideModal());
    },
    submitRating: state => {
      dispatch(submitRating(state));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateModal);