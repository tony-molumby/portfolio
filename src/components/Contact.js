import React from 'react'

import ContactForm from './ContactForm'

export default (props) => (
  <div className='page'>
    <div id='contact-banner' className='banner'></div>
    <h2 id='contact-subheading' className='shadow red-text-box subheading page-subheading'>A Call Goes Out To Our Hero</h2>
    <div id='contact-content' className='content'>
      <ContactForm id='contact-form'/>
    </div>
    
  </div>
)