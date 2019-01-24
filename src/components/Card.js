import React, {useRef} from 'react'
import {useGlobal} from 'reactn'

// //animations
// import {TweenLite, Back} from 'gsap/TweenMax'
// import {Transition} from 'react-transition-group'

export default ({icon, title, imageName, content, web, github, }) => {
  return (
    <div className='card'>
      <img src={'images/' + imageName} alt='work item'/>
      <div className='card-title'>{title}</div>
    </div>
  )
}