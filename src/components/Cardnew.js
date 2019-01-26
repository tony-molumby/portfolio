import React, {useRef} from 'react'
import {useGlobal} from 'reactn'

// //animations
// import {TweenLite, Back} from 'gsap/TweenMax'
// import {Transition} from 'react-transition-group'

export default ({icon, title, src, content, web, github, }) => {
  let image = require('../images/mywork/' + src)
  return (
    <div className='card'>
      <img src={image} alt='work item'/>
      <div className='card-title'>{title}</div>
    </div>
  )
}