import createRule from './createRule'

export default {
    card: {
        zoomIn: {
            
        }
    },
    content: {
        default: {
            // display: 'inline',
            transition: `all 500ms ease-in-out`,
            backgroundColor: 'white',
            padding: '20px',
            // width: '100%',
            // height: '100%',
        },
        transition: {
            entering: { 
                ...createRule('transition', 'translate(0%, -100%)'),
                display: 'block',
                opacity: 0
            },
            entered: { 
                display: 'block',
                ...createRule('transition', 'translate(0%, 0%)'), 
                zIndex: 5,
                opacity: 1
            },
            exiting: { ...createRule('transition', 'translate(0%, -100%'),},
            exited: {display: 'none'}
        }
    },

    closeBtn: {
        default: {
            display: 'none',
            opacity: 0,
            ...createRule('transition', 'opacity 500ms ease-in-out')
        },
        transition: {
          entering: { display: 'inline-block', position: 'absolute', top: '25px', right: '20px',  opacity: 1 },
          entered: {display: 'inline-block', position: 'absolute', top: '25px', right: '20px', opacity: 1, cursor: 'pointer' },
          exiting: { display: 'none', opacity: 0 }
        },
    },
    

    blur: {
        default: {
            position: 'fixed',
            display: 'none',
        },
        transition: {
            entering: { display: 'inline-block', height:'100%', width: '100%', opacity: 0 },
            entered: { display: 'inline-block', opacity: 0.7, zIndex: 5 },
            exiting: { opacity: 0, height: 0},
            exited: {display: 'none'}
        }
    }
}