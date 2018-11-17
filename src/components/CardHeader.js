import React from 'react'
import {useRef, useEffect} from 'react'
import {Transition} from 'react-transition-group'

export default ({title, subtitle, className, src, cardHeaderRef, imageRef,  }) => {

    useEffect(()=> {
        //set card
    })

    return (
        <div className={card-header} >
            <img className='card-pic' src={src} />
            <div className='card-title-bg' />
            <h2 className='card-title'>{title}</h2>
            <div className='card-subtitle'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Integer a sodales diam, 
                    quis venenatis lacus. In hac habitasse 
                    platea dictumst. 
                </p>
            </div>

        </div>
    )
}