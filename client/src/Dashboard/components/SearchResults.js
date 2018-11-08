import React from 'react';
import ArticleContainer from '../containers/ArticleContainer';
import dashboard from '../../assets/css/Dashboard.module.css';

const SearchResults = props => {
  let results = props.results
    .filter(article => {
      return Boolean(article.source)
    })
    .map((article, i) => {
      return <ArticleContainer article={article} key={i} />
    })

  return <div className={dashboard.resultsWrapper}>{results}</div>
}

export default SearchResults;