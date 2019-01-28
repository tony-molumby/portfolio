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
    let stretchCard = useRef(null)

    const [cardSize, setCardSize] = useGlobal('cardSize')
    const [isZoomed, setIsZoomed] = useGlobal('isZoomed')

    function zoomIn() {
        setIsZoomed(true)
        let zoomFactor = 1.5
        document.body.style.overflow = 'hidden'
        let cardWidth = (parseInt(cardSize.width))
        let screenCenter = (window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth) / 2
        let cardTop = -cardRef.getBoundingClientRect().top + 50 + 'px'
        let cardLeft = cardRef.getBoundingClientRect().left 
        let cardCenter = cardLeft + (cardWidth * zoomFactor / 2)
        let moveX = screenCenter - cardCenter + 'px'
        
        zoom.current = new TimelineLite()
        zoom.current.to(cardRef, 0.1, {
            position: 'relative',
            top: cardTop,
            left: moveX
        }).to(cardRef, 0.2, {
            width: zoomFactor * 100 + '%' ,
            height: zoomFactor * 100 + '%'
        })

        zoom.current.play()
    }

    function zoomOut() {
        setIsZoomed(false)
        document.body.style.overflowY = 'scroll'
        zoom.current.reversed(true)
    }

    function toggleZoom() {
        isZoomed ? zoomOut() : zoomIn()
    }

    return (
        <div className='card-container'>
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
        </div>

        
    )
}