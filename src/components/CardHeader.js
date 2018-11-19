import React, {useEffect} from 'react'
import {TweenMax} from 'gsap/TweenMax'
import {Transition} from 'react-transition-group'

export default ({title, subtitle, src, cardHeaderRef}) => {
    return (
        <div className='card-header' ref={cardHeaderRef} >
            <div className='card-image'
                style={{
                    backgroundImage: 'url(' + src + ')', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'auto 100%'
                }} ></div>
            <div className='card-title-bg' />
            <h2 className='card-title'>{title}</h2>
            <div className='card-subtitle'>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}