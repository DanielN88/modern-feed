import React, { useState } from 'react'
import './Form.css'
import ArticleOption from './ArticleOption'

const Form = ({updateFilter, subSections}) => {

  const [filterType, setFilterType] = useState('')

  // const allSubSections = () => {
  //   const mappedSubSections = subSections.map((subSection) => {
  //     return (
  //       <ArticleOption subSection={subSection}/>
  //     )
  //   })
  //   return mappedSubSections
  // }

  // const displaySubSections = () => {
  //   if (subSections.length) {
  //     return (
  //       <div>
  //         {allSubSections()}
  //       </div>
  //   )
  // }
  // }

  const handleChange = (event) => {
    setFilterType(event.target.value)
  }

  return (
    <div className='form-container'>
      <h2>Filter by type</h2>
      <label>Filter by section
        <select onChange={(event) => handleChange(event)}>
          <option value='home'>Homepage</option>
          <option value='arts'>Arts</option>
          <option value='automobiles'>Automobiles</option>
          <option value='books'>Books</option>
          <option value='business'>Business</option>
          <option value='fashion'>Fashion</option>
          <option value='food'>Food</option>
          <option value='health'>Health</option>
          <option value='insider'>Insider</option>
          <option value='magazine'>Magazine</option>
          <option value='nyregion'>NYregion</option>
          <option value='obituaries'>Obituaries</option>
          <option value='opinion'>Opinion</option>
          <option value='politics'>Politics</option>
          <option value='realestate'>Realestate</option>
          <option value='science'>Science</option>
          <option value='sports'>Sports</option>
          <option value='sundayreview'>Sunday Review</option>
          <option value='technology'>Technology</option>
          <option value='theater'>Theater</option>
          <option value='t-magazine'>T-Magazine</option>
          <option value='travel'>Travel</option>
          <option value='upshot'>Upshot</option>
          <option value='us'>US</option>
          <option value='world'>World</option>
        </select>
      </label>
      <button onClick={() => updateFilter(filterType)}>Submit</button>
    </div>
  )
}

export default Form