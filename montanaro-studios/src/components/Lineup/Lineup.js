import React from 'react';
import './Lineup.css';
import SortableListComponent from './../common/SortableListComponent';
import PlayerAPI from './../Roster/api'


const Lineup = props => {
      return (
        <div className="lineup-wrapper">
                    <div><h1>Lineup</h1></div>
        <div class="lineup">
<span className="player"><SortableListComponent players={PlayerAPI.players} valueProperty={'nickname'}/></span>
<span className="position"><SortableListComponent players={PlayerAPI.players} valueProperty={'position'}/></span>
</div>
</div>
      )
}



export default Lineup;
 