import React from 'react'
import './Homepage.css'
import Form from './Form.js'
import Articles from './Articles'

const Homepage = ({articles, updateFilter, subSections}) => {
  
  return (
    <div className='content'>
      <Form updateFilter={updateFilter} subSections={subSections}/>
      <Articles articles={articles} />
    </div>
  )
}

export default Homepage