import React from 'react'
import {useState, useEffect, useRef} from 'react'
import {TweenMax, Back} from 'gsap/TweenMax'

import styles from '../styles/card'



export default ({title, subtitle, img, content}) => {
    let cardRef, zoom, responsive, removeCorners = useRef(null)
    const [isZoomed, setIsZoomed] = useState(false)

    function zoomIn() {
        //make sure to have the card height handy before doing this
        setIsZoomed(true)
        document.body.style.overflow = 'hidden'
        let cardTop = cardRef.getBoundingClientRect().top
        zoom.current = TweenMax.to(
            cardRef, 0.2, 
            {
                ...{top: -cardTop, ease: Back.easeIn.config(1.7)},
                ...styles.card.zoomIn, 
            }
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
        //set zindex of card?
        document.body.style.overflowY = 'scroll'
        //removeCorners.reversed(true)
        zoom.current.reversed(true)
    }

    function toggleZoom() {
        isZoomed ? zoomOut() : zoomIn()
    }


    return (
        <div className='card-holder' style={{...styles.cardHolder.default, ...{height: '400px', width: '300px'}}}>
            <div 
                className='card'
                ref={div => cardRef = div}
                onClick={toggleZoom} 
                >
                
            </div>
        </div>
        
    )
}