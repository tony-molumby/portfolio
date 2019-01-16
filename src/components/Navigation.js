import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <nav id='nav'>
      <Link id='home-link' className='shadow' to='/'>
        <h2 className='red-text-box' id='home-link-text'>TM</h2>
      </Link>
      <div id='nav-links' className='shadow'>
        <Link className='nav-link' to='/about/'>About</Link>
        <Link className='nav-link' to='/mywork/'>My Work</Link>
        <Link className='nav-link' to='/contact/'>Contact</Link>
      </div>
    </nav>
  )
}