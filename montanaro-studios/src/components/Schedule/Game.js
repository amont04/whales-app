import React from 'react'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Game = (props) => {
  return (
    <div>
      <h2>Game page here</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default Game