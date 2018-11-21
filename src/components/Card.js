import React, {useEffect, useRef} from 'react'
import {useGlobal} from 'reactn'

import {TweenLite, Back} from 'gsap/TweenMax'
import {Transition} from 'react-transition-group'

import styles from '../styles/card'
import CardHeader from './CardHeader';



export default ({title, subtitle, src, content}) => {
    let cardRef = useRef(null)
    let cardHeaderRef = useRef(null)
    let blurRef = useRef(null)
    //animation references
    let zoom = useRef(null)
    let removeCorners = useRef(null)
    let blurBackground = useRef(null)

    const [cardSize, setCardSize] = useGlobal('cardSize')
    const [isZoomed, setIsZoomed] = useGlobal('isZoomed')
    const [imgSize, setImgSize] = useGlobal('imgSize')    

    function zoomIn() {
        setIsZoomed(true)
        document.body.style.overflow = 'hidden'
        let cardTop = -cardRef.getBoundingClientRect().top + 10 + 'px'
        let cardLeft = -cardRef.getBoundingClientRect().left + 'px'
        zoom.current = TweenLite.to(
            cardRef, 0.2, 
            {
                ...{top: cardTop, left: cardLeft, ease: Back.easeIn.config(1.7)},
                ...styles.card.zoomIn
            }
        )
        
        removeCorners.current = TweenLite.to(
            cardHeaderRef.current, 0.5, {
                borderRadius: '0px',
            }
        )
        
        blurBackground.current = TweenLite.to(
            blurRef.current, 0.2, styles.blur.zoomIn
        )
    }

    function zoomOut() {
        setIsZoomed(false)
        document.body.style.overflowY = 'scroll'
        zoom.current.reversed(true)
        removeCorners.current.reversed(true)
    }

    function toggleZoom() {
        isZoomed ? zoomOut() : zoomIn()
    }

    return (
        <div 
            className='card'
            ref={div => cardRef = div}
            onClick={toggleZoom}
            style={cardSize} 
            >
            <CardHeader 
                title={title}
                subtitle={subtitle}
                src={src}
                cardHeaderRef={cardHeaderRef}
                />
            <Transition in={isZoomed} timeout={199} >
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