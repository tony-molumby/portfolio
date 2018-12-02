import React, {useRef} from 'react'
import {useGlobal} from 'reactn'

//animations
import {TweenLite, Back} from 'gsap/TweenMax'
import {Transition} from 'react-transition-group'

import styles from '../styles/card'
import CardHeader from './CardHeader';

export default ({title, subtitle, src, content}) => {
    let cardRef = useRef(null)
    let cardHeaderRef = useRef(null)
   
   //animation references   
    let zoom = useRef(null)
    let zoomHeader = useRef(null)

    const [cardSize, setCardSize] = useGlobal('cardSize')
    const [isZoomed, setIsZoomed] = useGlobal('isZoomed')

    function zoomIn() {
        setIsZoomed(true)
        document.body.style.overflow = 'hidden'
        let cardTop = -cardRef.getBoundingClientRect().top + 10 + 'px'
        let cardLeft = -cardRef.getBoundingClientRect().left + 'px'
        zoom.current = TweenLite.to(
            cardRef, 0.2, 
            {
                ...{top: cardTop, left: cardLeft, ease: Back.easeIn.config(1.7)},
                ...styles.card.zoomIn,
            }
        )
        zoomHeader.current = TweenLite.to(
            cardHeaderRef.current, 0.5, {
                ...{borderRadius: '0px' },
                ...styles.cardHeader.zoomIn
       
            }
        )
        
    }

    function zoomOut() {
        setIsZoomed(false)
        document.body.style.overflowY = 'scroll'
        zoom.current.reversed(true)
        zoomHeader.current.reversed(true)

    }

    function toggleZoom() {
        isZoomed ? zoomOut() : zoomIn()
    }

    return (
        <div 
            className='card'
            ref={div => cardRef = div}
            onClick={!isZoomed ? toggleZoom : null}
            style={cardSize} 
            >
            <CardHeader 
                title={title}
                subtitle={subtitle}
                src={src}
                cardHeaderRef={cardHeaderRef}
                isZoomed={isZoomed}
                toggleZoom={toggleZoom}
                />
            <Transition in={isZoomed} timeout={200} >
                {(state) => (
                    <div 
                        className='content'
                        style={{
                            ...styles.content.default,
                            ...styles.content.transition[state]
                        }}
                        >
                        {content}
                    </div>
                )}
            </Transition>
        </div>
        

        
    )
}