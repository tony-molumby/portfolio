import React, {useEffect} from 'react'

export default ({title, subtitle, src, cardHeaderRef, getImageSize}) => {

    useEffect(() => {
      
    })
    return (
        <div 
            className='card-header' 
            ref={cardHeaderRef} 
            style={{ 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'auto 100%'
            }} 
            >
            <div className='card-title-bg' />
            <h2 className='card-title'>{title}</h2>
            <div className='card-subtitle'>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}