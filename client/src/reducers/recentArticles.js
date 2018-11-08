import {RECENTARTICLES_ADD, RECENTARTICLES_RESET} from '../actions/addRecentArticle';

const recentArticles = (state = [], action) => {
  switch(action.type) {
    case RECENTARTICLES_ADD:
      for(let i=0; i<state.length; i++) {
        if(state[i].url === action.article.url) return state;
      }
      return [
        action.article,
        ...state
      ];
    case RECENTARTICLES_RESET:
      return [];
    default:
      return state;
  }
}

export default recentArticles;