import React from 'react'
import Social from './Social'

export default (props) => (
  <div className='page'>
    <div id='about-banner' className='banner'></div>
    <h2 id='about-subheading' className='shadow red-text-box subheading page-subheading'>My ability to control the machines was born...</h2>
    <div id='about-content' className='content comic-font'>
      <h3>
        Hi, I’m Tony.  I’m a Full-Stack Software Developer/Engineer, 
        Certified Scrum Product Owner, and Clinician.
      </h3>
      <p>  
        I have a passion for technology, consumer applications, 
        startups, and healthcare.  I started my career working at the bedside
        in a Surgical ICU unit of a level-1 trauma center, and have since been
        working with startups in the healthcare, finance and consumer industries. 
        My motivation is to improve the lives of both my team and
        my clients by being a positive influence on company culture
        and building useful applications. 
      </p>
      <p>
        I love to learn and have a broad range of specialties including: 
        Web and Mobile Software Development/Engineering, interaction design,
        psychology, healthcare, Agile and Scrum, and computer hardware.
        For web development I focus on JavaScript and its related frameworks 
        and libraries. I am most familiar with the MERN stack 
        (MongoDB, Express, ReactJS and NodeJS), and I am excited about the
         opportunity to learn new technologies working with agile teams in the future.
      </p>
      <p>
        To learn more about my work experience please check out my CV below!
      </p>
    </div>
    <Social id='social-about'/>
    {/* <h2 id='about-action-text'>Call to Action Text</h2> */}
    
  </div>
)