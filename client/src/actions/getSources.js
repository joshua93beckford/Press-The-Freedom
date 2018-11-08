export const GOT_SOURCES = 'GOT_SOURCES';
export const GOT_TOPSOURCES = 'GOT_TOPSOURCES';

export function getSources() {
  return dispatch => {
    fetch('/api/sources').then(response => {
      if(response.ok) {
        response.json().then(data => {
          if(data.sources) {
            let sources = new Map();
            data.sources.forEach(source => sources.set(source.id, source.name));
            dispatch(gotSources(sources));
          }
        })
      }
    })
  }
}

function gotSources(sources) {
  return {
    type: GOT_SOURCES,
    sources
  }
}

export function getTopSources() {
  return dispatch => {
    fetch('/api/toptenrating').then(response => {
      if(response.ok) {
        response.json().then(data => {
          let sources = data
            .filter(src => {
              return src.totalusers > 0;
            })
            .map(src => {
              return {
                name: src.name,
                description: src.description,
                credibleScore: src.credtotal / src.totalusers,
                accurateScore: src.acctotal / src.totalusers,
                relevantScore: src.reltotal / src.totalusers
              }
            })
          dispatch(gotTopSources(sources));
        }).catch(err => console.log(err));
      }
    }).catch(err => {console.log(err)});
  }

}

function gotTopSources(sources) {
  return {
    type: GOT_TOPSOURCES, 
    sources
  }
}