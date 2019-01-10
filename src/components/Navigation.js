import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <div className='nav'>
      <nav className='nav-flex'>
        <Link className='home-link shadow' to='/'>
          <h2 className='red-text-box' id='home-link-text'>TM</h2>
        </Link>
        <div className='nav-links shadow'>
          <Link className='nav-link' to='/about/'>About</Link>
          <Link className='nav-link' to='/mywork/'>My Work</Link>
          <Link className='nav-link' to='/contact/'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}