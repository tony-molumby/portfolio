import React from 'react'
import Social from './Social'

export default (props) => (
  <div className='page'>
    <div id='about-banner' className='banner'></div>
    <h2 id='about-subheading' className='shadow red-text-box subheading page-subheading'>My ability to control the machines was born...</h2>
    <div id='about-content' className='content comic-font'>
      <h3>
        Hi, I’m Tony.  I’m a Full-Stack Software Developer / Engineer, 
        Certified Scrum Product Owner, and a Clinician.
      </h3>
      <p>  
        I have a passion for technology, consumer applications, 
        startups and extensive experience in the Healthcare field, 
        both at the bedside and working with Healthcare startups.  
        My motivation is to improve the lives of both my team and
        my clients by being a positive influence on company culture
        and building useful applications respectively.
      </p>
      <p>
        I love to learn so I have a broad range of specialties, 
        but I am most passionate about developing web / mobile 
        applications, interaction design, psychology, healthcare 
        IT, working with positive / collaborative teams, 
        agile practices, and computer hardware.  For web development 
        I focus on JavaScript and its related frameworks and libraries.  
        I am most familiar with the MERN stack (MongoDB, Express, ReactJS 
        and NodeJS), and I am excited about the opportunity to 
        learn new technologies working with agile teams in the future.
      </p>
      <p>
        To learn more about my work experience please check out my CV!
      </p>
    </div>
    <Social id='social-about'/>
    {/* <h2 id='about-action-text'>Call to Action Text</h2> */}
    
  </div>
)