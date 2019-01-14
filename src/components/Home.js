import React from 'react'
import Social from './Social'
import headshot from '../images/Headshot.png'
import { defaultCipherList } from 'constants';


export default (props) => (
  <div id='home'>
    <h1 id='home-heading' className='shadow red-text-box'>TONY MOLUMBY</h1>
    <div id='headshot'></div>
    <h2 id='home-subheading' className='shadow red-text-box'>Web Developer, Product Owner and Clinician</h2>
    <Social />
  </div>
)

// export default (props) => (
//   <div className='home'>
//     <h1 className='red-text-box name-heading shadow'>TONY MOLUMBY</h1>
//     <div className='headshot-container'>
//       <img src={headshot} className='headshot' alt='headshot' />
//     </div>
//     <h2 className='subheading red-text-box shadow'>Web Developer, Product Owner and Clinician</h2> 
//     <Social />
//   </div>
 
// )