import React from 'react'

const content = [
  { 
    icon: 'far fa-file',
    url: ''
  },
  {
    icon: 'fab fa-linkedin',
    url: 'https://www.linkedin.com/in/tony-molumby/'
  },
  {
    icon: 'fab fa-github-square',
    url: 'https://github.com/tony-molumby'
  },
  {
    icon: 'fab fa-codepen',
    url: 'https://codepen.io/InfiniteSet/#'
  },
]

let icons = content.map((item, i) => {
  return (
    <a href={item.url}>
      <i className={item.icon + ' fa-3x social-icon'} ></i>
    </a>
  )
})

export default (props) => (
  <div className='social-icons'>
    {icons}
  </div>
)