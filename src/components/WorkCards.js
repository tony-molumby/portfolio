import React from 'react'

import Card from './CardOld'

export default ({items, id, className}) => {
  return (
    <div id={id} className={className}>
      {
        items.map((item, idx) => {
          return (
              <Card 
                title={item.title}
                icon={item.icon}
                src={item.imageName}
                content={item.content}
                key={'card-' + idx}
                />
          )
        })
      }
    </div>
  )
}
  


