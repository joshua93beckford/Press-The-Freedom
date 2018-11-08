import {GOT_SOURCES, GOT_TOPSOURCES} from '../actions/getSources';

const sources = (state = [], action) => {
  switch(action.type) {
    case GOT_SOURCES:
      return action.sources
    default:
      return state
  }
}

const topSources = (state = [], action) => {
  switch(action.type) {
    case GOT_TOPSOURCES:
      return action.sources
    default:
      return state;
  }
}

export {sources, topSources};