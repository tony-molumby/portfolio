import React from 'react'
import Card from './components/Card'
import CardContent from '././content/card'


export default () => {
  function makeCards() {
    let contentArr = []
    let cardArr = []
    for(let i=0; i < 10; i++) {
      contentArr.push(<p key={i}>{CardContent[0].content}</p>)
    }
    for(let i=0; i < 10; i++){
      cardArr.push(
        <Card 
          title={CardContent[0].title}
          subtitle={CardContent[0].subtitle}
          src={CardContent[0].src}
          content={contentArr}
          key={'card-' + i}
        />
      )
    }
    return cardArr
  }

  let cardList = makeCards()

  return (
    <div className='container'>
      {cardList}
    </div>
  )    
  
}



