import React from 'react'

import ContactForm from './ContactForm'

export default (props) => (
  <div className='page'>
    <div id='contact-banner' className='banner'></div>
    <h2 id='contact-subheading' className='shadow red-text-box subheading page-subheading'>Together we can conquer any foe</h2>
    <div id='contact-content' className='content'>
      <div id='contact-form-container'>
        <h2>Contact Me</h2>
        <p className='comic-font'>
          If you like my work and are looking for a front-end
          or full-stack developer in the San Francisco Bay Area, or for a remote position,
          please contact me and let's collaborate.
        </p>
        <ContactForm id='contact-form'/>
      </div>
      
    </div>
  </div>
)