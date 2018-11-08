export const SEARCH_CALL = 'SEARCH_CALL';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const SEARCH_RESET = 'SEARCH_RESET';

export const searchStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETE: 'COMPLETE',
  ERROR: 'ERROR'
}

export function searchReset() {
  return {
    type: SEARCH_RESET
  }
}

export function searchArticles(containerState) {
  return dispatch => {
    if(containerState.searchInput) {
      dispatch(searchCall());
      let url = `/api/article/${containerState.searchInput}`;
      if(containerState.sourceInput) url += `/${containerState.sourceInput}`;
      fetch(url)
        .then(response => {
          if(response.ok) {
            response.json().then(data => {
              if(data.message) {
                dispatch(searchError(data.message));
              } else {
                dispatch(searchResults(data));
              }})
            .catch(err => dispatch(searchError('Oops! We can\'t find your articles.')))
          }
        })
        .catch(err => dispatch(searchError('Oops! We can\'t find your articles.')))
    }
  }
}

function searchCall() {
  return {
    type: SEARCH_CALL
  }
}

function searchResults(data) {
  return {
    type: SEARCH_RESULTS,
    data
  }
}

function searchError(msg) {
  return {
    type: SEARCH_ERROR,
    msg
  }
}
