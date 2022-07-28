import React from 'react'
import './Articles.css'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom'

const Articles = (articles) => {
 if (articles.articles.length) {
    const allArticles = articles.articles.map(article => {
      return (
        <Link className='article-link' key={article.id} to={`/${article.id}`}>
          <ArticleCard 
          id={article.id}
          title={article.title}
          createdDate={article.createdDate}
          />
        </Link>
      )
    })

    
  return (
    <div className='articles-section'>
     <p className='article-title'>Top Articles for this month</p>
      <div className='articles-container'>
        {allArticles}
      </div>
    </div>
  )
}
}

export default Articles