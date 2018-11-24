import React, {useRef, useGlobal} from 'reactn'
import {Transition} from 'react-transition-group'
import Card from './components/Card'
import CardContent from '././content/card'

import styles from './styles/card'

export default () => {
  let blurRef = useRef(null)
  const [isZoomed, setIsZoomed] = useGlobal('isZoomed')

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
    <Transition 
      in={isZoomed}
      timeout={300}
      >
      {(state) => (
        <div 
          className='blur'
          style={{
            ...styles.blur.default,
            ...styles.blur.transition[state]
          }}
          ref={(div) => blurRef = div}>
        </div>
      )}
    </Transition>
    {cardList}
    </div>
  )    
  
}



