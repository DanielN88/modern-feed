import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className='nav-container'>
      <h1>Modern Feed</h1>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Nav