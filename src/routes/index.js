import React, { Fragment } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from '../components/Navigation/Navigation'
import Home from './Home'
import Services from './Services'

export default () => (
    <BrowserRouter>
        <Fragment>
            <Navigation />
            <Switch>
                <Route path="/" exact render={props => <Home {...props} />} />
                <Route path="/services" exact render={props => <Services {...props} />} />
            </Switch>
        </Fragment>
    </BrowserRouter>
)