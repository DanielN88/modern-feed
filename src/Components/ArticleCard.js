import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({id, title, createdDate}) => {
  return (
    <div key={id} id={id} className='article-card'>
      <h2>{title}</h2>
      <p>{createdDate}</p>
    </div>
  )
}

export default ArticleCard