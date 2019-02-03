import React, {Component} from 'react'

//animations
import {TimelineLite, Back} from 'gsap/TweenMax'
import {Transition} from 'react-transition-group'

import styles from '../styles/card'
import CardHeader from './CardHeader';

export default class Card extends Component {
    constructor(props){
        super(props)
        this.cardRef = React.createRef();
        this.cardHeaderRef = React.createRef();
        this.zoom = React.createRef();
        this.state = {
            cardSize: {width: '100%', height: '100%', },
            cardContainerSize: {width: '350px', height: '300px'},
            isZoomed: false
        }
    }

    zoomIn = () => {
        this.setState({isZoomed: true},
            (previousState) => {
                document.body.style.overflow = 'hidden'
                let screenWidth = (window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth)
                let zoomFactor = 0.8 * screenWidth
                let maxWidth = 1000
                let cardTop = -this.cardRef.getBoundingClientRect().top + 50 + 'px'
                let cardLeft = this.cardRef.getBoundingClientRect().left 
                let maxMove = screenWidth > maxWidth ? screenWidth - maxWidth: screenWidth - zoomFactor 
                let moveX = (maxMove / 2) - cardLeft + 'px'
                
                this.zoom.current = new TimelineLite()
                this.zoom.current
                    .to(this.cardRef, 0.35, {
                        position: 'relative',
                        top: cardTop,
                        left: moveX,
                        width: zoomFactor,
                        height: 'auto',
                        maxWidth: '1000px',
                        zIndex: 6,
                        cursor: 'default',
                        overflowY: 'scroll',
                        gridTemplateRows: '50vh 1fr',
                        backgroundColor: 'white'
                    })
                    .to(this.cardHeaderRef.current, 0.35, {
                        backgroundPosition: 'center',
                        // gridTemplateRows: '2fr 1fr'
                    })
                    
                this.zoom.current.play()
            })
        
    }

    zoomOut = () => {
        this.setState({isZoomed: false},
            (previousState) => {
                document.body.style.overflowY = 'scroll'
                this.zoom.current.reversed(true)
            })
    }

    toggleZoom = () => {
        this.state.isZoomed ? this.zoomOut() : this.zoomIn()
    }

    handleClick = (url) => {
        window.open(url, 'blank')
    }

    render(){
        let {title, icon, src, content, tech, image, web, github} = this.props.item
        return (
            <div className='card-container' style={this.state.cardContainerSize}>
                <div 
                    className='card'
                    ref={div => this.cardRef = div}
                    onClick={!this.state.isZoomed ? this.toggleZoom : null}
                    style={this.state.cardSize}
                    >
                    <CardHeader 
                        title={title}
                        icon={icon}
                        src={src}
                        ref={this.cardHeaderRef}
                        isZoomed={this.state.isZoomed}
                        toggleZoom={this.toggleZoom}
                        />
                    <Transition in={this.state.isZoomed} timeout={200} >
                        {(state) => (
                            <div 
                                className='card-content'
                                style={{
                                    ...styles.content.default,
                                    ...styles.content.transition[state]
                                }}
                                >
                                {content}
                                <br></br>
                                <br></br>
                                <div>Technologies Used: {tech}</div>
                                <div className='card-icons'>
                                     {
                                        github !== undefined && github.length > 0 &&
                                            <div className='card-links' onClick={() => this.handleClick(github)}>
                                                <i className="fab fa-github-square"></i>
                                                <div>Github</div>
                                            </div>
                                    }
                                     {
                                        web !== undefined && web.length > 0 &&
                                            <div className='card-links' onClick={() => this.handleClick(web)}>
                                                <i className="fas fa-globe"></i>
                                                <div>Web</div>
                                            </div>
                                    }
                                   
                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </div>
    
            
        )
    }
    
}


