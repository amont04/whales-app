import React from 'react'
import ScheduleAPI from './api'
import { Link } from 'react-router-dom'
import './Schedule.css';


// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullSchedule = () => (
  <div className="schedule">
    <ul>
      {
        ScheduleAPI.all().map(g => (
          <li key={g.opponent}>
          <Link to={`/schedule/${g.opponent}`}>{g.opponent}</Link>
        </li>
        ))
      }
    </ul>
  </div>
)

export default FullSchedule
