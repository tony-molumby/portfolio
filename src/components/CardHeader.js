import React from 'react'
import {Transition} from 'react-transition-group'
import CloseBtn from '../components/CloseBtn'

import styles from '../styles/card'

export default ({title, subtitle, icon, src, cardHeaderRef, isZoomed, toggleZoom}) => {

    return (
        <div 
            className='card-header' 
            ref={cardHeaderRef} 
            // style={{
            //     backgroundImage: 'url(' + src + ')', 
            //     backgroundPosition: 'center top', 
            //     backgroundRepeat: 'no-repeat', 
            //     backgroundSize: 'cover'
            // }} 
            >
            <i className={icon + ' card-icon'}></i>
            <div className='card-title-bg' />
            <h2 className='card-title'>{title}</h2>
            <Transition in={isZoomed} timeout={200} >
				{(state) => (
					<div className='close-btn'
						style={{
							...styles.closeBtn.default,
							...styles.closeBtn.transition[state]
						}} >
                        <CloseBtn 
                            onClick={toggleZoom} 
                            height='40px' 
                            width='40px'
                            className='close-path' 
                            />
					</div>
				)}
			</Transition> 
            {/* <div className='card-subtitle'>
                <p>{subtitle}</p>
            </div> */}
        </div>
    )
}