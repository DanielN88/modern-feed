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
        <h1>TEST</h1>
        <h2>{title}</h2>
        <p>{createdDate}</p>
        <p>{abstract}</p>
        <p>{byLine}</p>
        <p>{section}</p>
        <p>{url}</p>
        {checkImage()}
      </div>
  )
}

export default ArticleDetails