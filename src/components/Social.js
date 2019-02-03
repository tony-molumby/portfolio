import React from 'react'

export default ({id}) => {
  const content = [
    { 
      icon: 'far fa-file',
      url: 'https://drive.google.com/file/d/1Od-m9GdllwnT2PxNVnrNMgEyCQGoQEqA/view?usp=sharing',
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
  
  let handleClick = (url) => {
    window.open(url,'blank')
  }

  let icons = content.map((item, i) => {
    return (
      <div key={'social-' + i} onClick={() => handleClick(item.url)} className='social-links'>
        <i className={item.icon + ' social-icon'} ></i>
        <div className='social-text'>{item.text}</div>
      </div>
    )
  })

  return(
    <div id={id} className='social'>
      {icons}
    </div>
  )
}