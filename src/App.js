import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Form from './Components/Form'
import Articles from './Components/Articles'

const App = () => {
  
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hmnMnvdrsTLgtLuLtFHwxdb5jQhBzJ2J')
    .then(response => response.json())
    .then(data => console.log(data))
  },[])

  return (
    <div className='App'>
      <Nav />
        <div className='content'>
          <Form />
          <Articles />
        </div>
    </div>
  )
}

export default App