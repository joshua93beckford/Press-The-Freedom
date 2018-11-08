import React from "react";
import dashboard from '../../assets/css/Dashboard.module.css';
import ArticleContainer from "../containers/ArticleContainer";

const RecentArticles = props => {
  let articles = props.articles.map((article, i) => {
    return (
    <div className={dashboard.recentArticle} key={i}>
      <div className={dashboard.imgWrapper}>
        <img className={dashboard.img} src={article.urlToImage} alt='article'></img>
      </div>
      <ArticleContainer article={article} />
    </div>
    )
  })

  if(articles.length > 3) {
    articles = articles.slice(0, 3);
  }

  return (
    <section className={dashboard.section}>
      <h2>Your Recent Articles</h2>
      <div>{articles}</div>
    </section>       
  )
}

export default RecentArticles;