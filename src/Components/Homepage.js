import React from 'react'
import './Homepage.css'
import Form from './Form.js'
import Articles from './Articles'

const Homepage = ({articles}) => {
  
  return (
    <div className='content'>
      <Form />
      <Articles articles={articles} />
    </div>
  )
}

export default Homepage