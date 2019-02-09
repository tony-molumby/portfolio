import React from 'react'

import Card from './Card'

export default ({items, title}) => {
  return (
    <div>
      <h2 id='mywork-type-heading'>{title}</h2>
      <div className='mywork-cards comic-font'>
        {
          items.map((item, idx) => {
            return (
                <Card 
                  item={item}
                  key={'card-' + idx}
                  />
            )
          })
        }
      </div>
    </div>
    
  )
}
  


