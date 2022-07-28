import React from 'react'
import './ArticleOption.css'
import Form from './Form.js'
import Articles from './Articles'

const ArticleOption = ({subSection}) => {
    return (
      <div>
        <input type='checkbox' value={subSection}/>
        <label>{subSection}</label>
      </div>
    )  
}

export default ArticleOption