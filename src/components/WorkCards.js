import React from 'react'

import Card from './Card'

export default ({items}) => (
  items.map((item, idx) => {
    return (
      <div id='mywork-item'>
        <Card 
          title={item.title}
          icon={item.icon}
          src={item.imageName}
          content={item.content}
          />
      </div>
    )
  })
)

