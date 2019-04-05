import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullSchedule from './FullSchedule'
import Game from './Game'

// The Roster component matches one of two different routes
// depending on the full pathname
const Schedule = () => (
  <Switch>
    <Route exact path='/schedule' component={FullSchedule}/>
    <Route path='/schedule/:opponent' component={Game} />
  </Switch>
)


export default Schedule
