import React, {useState, useEffect, useRef} from 'react'

import {TweenMax, Back} from 'gsap/TweenMax'
import {Transition} from 'react-transition-group'

import styles from '../styles/card'
import CardHeader from './CardHeader';



export default ({title, subtitle, src, content}) => {
    //lots of references for animations
    let cardRef = useRef(null)
    let cardHeaderRef = useRef(null)
    let zoom = useRef(null)
    let zoomHeader = useRef(null)
    
    let responsive = useRef(null)
    let removeCorners = useRef(null)

    const [cardSize, setCardSize] = useState({width: '300px', height: '400px'})
    const [isZoomed, setIsZoomed] = useState(false)
    

    function zoomIn() {
        //make sure to have the card height handy before doing this
        setIsZoomed(true)
        document.body.style.overflow = 'hidden'
        let cardTop = cardRef.getBoundingClientRect().top
        let cardLeft = cardRef.getBoundingClientRect().left
        zoom.current = TweenMax.to(
            cardRef, 0.2, 
            {
                ...{top: -cardTop, left: -cardLeft, ease: Back.easeIn.config(1.7)},
                ...styles.card.zoomIn
            }
        )

        zoomHeader.current = TweenMax.to(
                        cardHeaderRef.current, 0.2,
                        {backgroundSize: '100% auto'}
                    ) 
    

        //remove corners from image header while
        //setting the header height to the height of the image

        //set the card to be responsive
        // responsive = TweenMax.to(
        //     cardRef, 0.01, {
        //         delay: 0.3,
        //         width: 'auto'
        //     }
        // )        
    
    }

    function zoomOut() {
        setIsZoomed(false)
        document.body.style.overflowY = 'scroll'
        //removeCorners.reversed(true)
        // zoomImage.current = TweenMax.to(
        //     cardHeaderRef.current, 0.2,
        //     {backgroundSize: 'auto 100%'}
        // )
        zoom.current.reversed(true)
        zoomHeader.current = TweenMax.to(
            cardHeaderRef.current, 0.3,
            {backgroundSize: '100% ' + cardSize.height}
        )
        

    }

    function toggleZoom() {
        isZoomed ? zoomOut() : zoomIn()
    }


    return (
        <div className='card-holder' style={cardSize}>
            <div 
                className='card'
                ref={div => cardRef = div}
                onClick={toggleZoom} 
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

        </div>
        
    )
}