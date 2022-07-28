import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Homepage from './Components/Homepage'
import ArticleDetails from './Components/ArticleDetails'

const App = () => {
  
  const [articles, setArticles] = useState([])


  const dataCleaner = (data) => {
    const cleanedData = data.map((article) => {
      let splitDate = article.created_date.split('T')
      return {
        id: Math.floor(Math.random() * Date.now()),
        title: article.title,
        abstract: article.abstract,
        byLine: article.byline,
        createdDate: splitDate[0],
        url: article.url,
        section: article.section,
        subSection: article.subsection,
        multimedia: article.multimedia
      }
    })
    return cleanedData
  }


  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hmnMnvdrsTLgtLuLtFHwxdb5jQhBzJ2J')
    .then(response => response.json())
    .then(data => dataCleaner(data.results))
    .then(cleanedData => setArticles(cleanedData))
  },[])

  const updateFilter = ((filter) => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${filter}.json?api-key=hmnMnvdrsTLgtLuLtFHwxdb5jQhBzJ2J`)
    .then(response => response.json())
    .then(data => dataCleaner(data.results))
    .then(cleanedData => setArticles(cleanedData))
  })


  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Nav />
          <Homepage articles={articles} updateFilter={updateFilter}/>
        </Route>
        <Route exact path='/:id' 
          render={({match}) => {
            const foundArticle = articles.find((article) => {
              return parseInt(article.id) === parseInt(match.params.id)
            })
            return (
              <>
                <Nav />
                <ArticleDetails {...foundArticle}/>
              </>
            )
          }}
        />
      </Switch>
    </div>
  )
}

export default App