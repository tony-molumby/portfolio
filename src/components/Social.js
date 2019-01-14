import React from 'react'

const content = [
  { 
    icon: 'far fa-file',
    url: '',
    text: 'CV'
  },
  {
    icon: 'fab fa-linkedin',
    url: 'https://www.linkedin.com/in/tony-molumby/',
    text: 'linkedIn'
  },
  {
    icon: 'fab fa-github-square',
    url: 'https://github.com/tony-molumby',
    text: 'Github'
  },
  {
    icon: 'fab fa-codepen',
    url: 'https://codepen.io/InfiniteSet/#',
    text: 'codepen'
  },
]

let icons = content.map((item, i) => {
  return (
    <a href={item.url} className='social-links'>
      <i key={'social-' + i} className={item.icon + ' social-icon'} ></i>
      <div className='social-text'>{item.text}</div>
    </a>
  )
})

export default (props) => (
  <div className='social-icons'>
    {icons}
  </div>
)