import React from 'react'
import WorkCards from './WorkCards'

import items from '../content/mywork'
console.log(items[0])
export default (props) => (
  <div id='mywork'>
    <div id='mywork-banner' className='banner'></div>
    <h2 id='mywork-subheading' className='shadow red-text-box subheading page-subheading'>With His Newfound Powers...</h2>
    <div id='mywork-content' className='content comic-font'>
      <p>
      I have worked with large and small organizations in a variety 
      of roles and believe in the idea of a &nbsp;
        <a style={{color: '#0CAFFA'}} href='https://medium.com/@anthonyambriz/jack-of-all-trades-master-of-many-22a6dbd6a86a'>
          Jack of All Trades, Master of Many.
        </a>
      </p>
      <p>
        The TLDR version:          
      </p>
      <p id='quote' className='comic-font-italic'>
        If you do one thing, you’d be very good at it. 
        If you do two things, you feel really busy. If you do 
        three or five things, you’re not that busy and they 
        all help each other and make you better at them. 
        It speeds the whole process of learning new skills 
        and getting more done.
        <br></br>
        <br></br>
        <span id='quote-attribution'>- Ryan Holliday</span>
      </p>
      <div>
        <h2 id='mywork-samples-heading' className='boom-font'>Samples of my work</h2>
      </div>
    </div>
    <WorkCards
      id='mywork-cards'
      className='comic-font'
      items={items.design}
      />
    {/* <h2 id='about-action-text'>Call to Action Text</h2> */}
    
  </div>
)