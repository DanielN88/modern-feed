import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({id, title, createdDate, multimedia}) => {
  return (
    <div key={id} id={id} className='article-card'>
      <h2 className='article-card-title'>{title}</h2>
      <p>{createdDate}</p>
    </div>
  )
}

export default ArticleCard