export const RECENTARTICLES_ADD = 'RECENTARTICLES_ADD';
export const RECENTARTICLES_RESET = 'RECENTARTICLES_RESET';

export function addRecentArticle(article) {
  return {
    type: RECENTARTICLES_ADD,
    article
  }
}

export function resetRecentArticles() {
  return {
    type: RECENTARTICLES_RESET,
  }
}