import {
  searchStatus, 
  SEARCH_CALL, SEARCH_RESULTS, SEARCH_ERROR, SEARCH_RESET
} from '../actions/searchArticles';

const search = (state = {
  results: [],
  status: searchStatus.COMPLETE,
  errorMsg: ''
}, action) => {
  switch(action.type) {
    case SEARCH_RESET:
      return {
        results: [],
        status: searchStatus.COMPLETE,
        errorMsg: ''
      }
    case SEARCH_CALL:
      return {
        results: [],
        status: searchStatus.IN_PROGRESS,
        errorMsg: ''
      }
    case SEARCH_RESULTS:
      return {
        ...state,
        results: action.data,
        status: searchStatus.COMPLETE
      }
    case SEARCH_ERROR:
      return {
        ...state,
        status: searchStatus.ERROR,
        errorMsg: action.msg
      }
    default: 
      return state;
  }
}

export default search;