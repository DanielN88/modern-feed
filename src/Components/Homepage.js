import React from 'react'
import './Homepage.css'
import Form from './Form.js'
import Articles from './Articles'

const Homepage = ({articles, updateFilter, subSections}) => {
  
  return (
    <div className='content'>
      <Form updateFilter={updateFilter} />
      <Articles articles={articles} />
    </div>
  )
}

export default Homepage