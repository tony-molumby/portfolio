
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
            transition: `opacity 500ms ease-in-out`,
            opacity: 0
        },
        transition: {
          entering: { display: 'block', position: 'absolute', opacity: 1 },
          exiting: { display: 'none', opacity: 0 }
        },
    },
    
    card: {
        default: {
            borderRadius: '16px',
            display: 'grid',
            position: 'relative',
            gridTemplateRows: 'auto auto',
            cursor: 'pointer',
            backgroundColor: 'red',
            height: '100%'
        }
    },

    cardHolder: {
        default: {
            justifySelf: 'center',
            backgroundColor: 'blue'
        }
    }
}