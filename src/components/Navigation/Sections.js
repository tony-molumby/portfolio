import React, {Fragment} from 'react'

import {  Tab, withStyles } from '@material-ui/core'

const Sections = ({routeNames}) => (
        <Fragment >
            {
                routeNames.map(({name, value}) => (
                    <Tab key={name} label={name} value={value} />
                ))
            }
        </Fragment>
)

export default Sections