import React from 'react'
import './ArticleDetails.css'

const ArticleDetails = ({id, title, createdDate, abstract, byLine, section, url, multimedia}) => {
  const checkImage = () => {
    if (multimedia !== null) {
      return <img src={multimedia[1].url}/>
    } else {
      return <p>Sorry no image available</p>
    }
  }

  return (
      <div className='article-details-container'>
        <div className='info-container'>
          <h2 className='detail-title'>{title}</h2>
          <p className='detail-abstract'>Abstract: {abstract}</p>
          <p>Author: {byLine}</p>
          <p>Date Created: {createdDate}</p>
          <p>Section: {section}</p>
          <p>Visit the Article at: {url}</p>
        </div>
        <div className='detail-image'>
          {checkImage()}
        </div>
      </div>
  )
}

export default ArticleDetails