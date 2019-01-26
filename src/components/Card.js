import React, {useRef} from 'react'
import {useGlobal} from 'reactn'

//animations
import {TimelineLite, Back} from 'gsap/TweenMax'
import {Transition} from 'react-transition-group'

import styles from '../styles/card'
import CardHeader from './CardHeader';

export default ({title, icon, subtitle, src, content}) => {
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
        let cardTop = -cardRef.getBoundingClientRect().top + 'px'
        let cardLeft = -cardRef.getBoundingClientRect().left + 'px'
        console.log('top: ' + cardTop)
        console.log('left: ' + cardLeft)
        zoom.current = new TimelineLite()
        zoom.current.to(cardRef, 0.2, {
            position: 'fixed',
            top: 0
            // left: cardLeft,
        }).to(cardRef, 0.4, {
            width: '70%',
            height: 'auto'
        })

        zoom.current.play()
            
        // zoomHeader.current = TweenLite.to(
        //     cardHeaderRef.current, 0.5, {
        //         // ...{borderRadius: '0px' },
        //         // ...styles.cardHeader.zoomIn
        //     }
        // )
        
    }

    function zoomOut() {
        setIsZoomed(false)
        document.body.style.overflowY = 'scroll'
        zoom.current.reversed(true)
        // zoomHeader.current.reversed(true)

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
                icon={icon}
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