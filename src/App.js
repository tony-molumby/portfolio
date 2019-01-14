import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import Navigation from './components/Navigation'
import About from './components/About'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default () => {
  return (
    <Router>
      <div id="container">
        <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/mywork/" component={MyWork} />
          <Route path="/contact/" component={Contact} />
        <Footer />
      </div>
  </Router>
  )    
  
}



