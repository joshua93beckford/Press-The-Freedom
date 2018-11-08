export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

export function submitRating(data) {
  return dispatch => {
    fetch('/api/srating', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(response => {
      if(!response.ok) {
        dispatch(ratingError());
      } else {
        response.json().then(data => {
          dispatch(hideModal());
        }).catch(err => console.log(err))
      }
    }).catch(err => console.log(err))
  }
}

function ratingError() {}

export function showModal(sourceid) {
  return {
    type: MODAL_SHOW,
    sourceid
  }
}

export function hideModal() {
  return {
    type: MODAL_HIDE
  }
}