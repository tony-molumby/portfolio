import React from 'react'
import {useState, useEffect} from 'react'
import styles from '../styles/card'

export default ({title, subtitle, img, content}) => {
    return (
        <div className='card-holder' style={{...styles.cardHolder.default, ...{height: '300px', width: '300px'}}}>
            <div className='card' style={styles.card.default}>

            </div>
        </div>
        
    )
}