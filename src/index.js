import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {setGlobal} from 'reactn'

setGlobal({
  isZoomed: false,
  index: null,
  cardSize: {width: '300px', height: '300px'},
  imgSize: {}
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
