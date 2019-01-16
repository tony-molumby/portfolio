import React from 'react'
import ReactSVG from 'react-svg'

import Social from './Social'

import BurstBackground from '../images/burstBackground'


export default (props) => (
  <div id='home'>
    <h1 id='home-heading' className='shadow red-text-box'>TONY MOLUMBY</h1>
    <div id='headshot'></div>
    <h2 id='home-subheading' className='shadow red-text-box'>Web Developer, Product Owner and Clinician</h2>
    <Social />
    {/* <BurstBackground id='burst-background'/> */}
  </div>
)