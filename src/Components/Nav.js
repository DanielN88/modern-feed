import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className='nav-container'>
      <h1 className='nav-title'>Modern Feed</h1>
      <Link to='/'>
        <button className='nav-button'>Home</button>
      </Link>
    </div>
  )
}

export default Nav