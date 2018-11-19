const createRule = (name, param) => {
    name = name.toLowerCase()
    let capitalize = name.charAt(0).toUpperCase() + name.slice(1)
    return {
        ['Webkit' + capitalize]: param,
        ['Moz' + capitalize]: param,
        ['ms' + capitalize]: param,
        ['O' + capitalize]: param,
        [name]: param
    }
}

export default {
    borderRadius: '16px',
    padding: '20px',
    cardWidth: '400px',

    content: {
        default: {
            display: 'none',
            transition: `opacity 500ms ease-in-out`,
            opacity: 0
        },
        transition: {
            entering: { display: 'inline-block', height: 0, opacity: 0 },
            entered: { display: 'inline-block', height: 'auto', opacity: 1 },
            exiting: { opacity: 0, height: 0},
            exited: {display: 'none'}
        }
    },

    closeButton: {
        default: {
            display: 'none',
            opacity: 0,
            ...createRule('transition', 'opacity 500ms ease-in-out')
        },
        transition: {
          entering: { display: 'block', position: 'absolute', opacity: 1 },
          exiting: { display: 'none', opacity: 0 }
        },
    },
    
    card: {
        zoomIn: {
                width: '100vw', 
                height: '100vh',
                borderRadius: '0px',
                overflowY: 'scroll',
                cursor: 'default',
                zIndex: 8
        }
    },

    cardHolder: {
        default: {
            justifySelf: 'center'
        },
        zoomIn: {
            ...createRule('transform','scaleY(1.1)')
        },
        zoomOut: {
            ...createRule('transform','scaleY(1.0)')
        }
    }
}