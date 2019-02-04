import React from 'react'
import WorkCards from './WorkCards'

import items from '../content/mywork'

export default (props) => (
  <div id='mywork'>
    <div id='mywork-banner' className='banner'></div>
    <h2 id='mywork-subheading' className='shadow red-text-box subheading page-subheading'>With My Newfound Powers...</h2>
    <div id='mywork-content' className='content comic-font'>
      <p>
      I have worked with large and small organizations in a variety 
      of roles and believe in the idea of a &nbsp;
        <span id='article' onClick={()=> window.open('https://medium.com/@anthonyambriz/jack-of-all-trades-master-of-many-22a6dbd6a86a', 'blank')}>
          Jack of All Trades, Master of Many.
        </span>
      </p>
      <p>
        The TLDR version:          
      </p>
      <p id='quote' className='comic-font-italic'>
      Jack of all trades, master of none, is an antiquated and unfair pairing.
      In fact, there’s an increasing need in our entrepreneurial culture
      for Renaissance thinkers and doers. Due to the rise of the digital world, 
      it is more necessary and feasible than ever for a modern entrepreneur 
      to be a jack of all trades, master of many.
        <br></br>
        <br></br>
        <span id='quote-attribution'>- Tyler Ward</span>
      </p>
      <div>
        <h2 id='mywork-samples-heading' className='boom-font red-text-box shadow'>Samples of my work</h2>
      </div>
    </div>
    <div id='mywork-section'>
      <WorkCards
        items={items.development}
        title='Web Development / Engineering'
      />
      <WorkCards
        items={items.design}
        title='Design and Prototyping'
        />
      </div>
  </div>
)