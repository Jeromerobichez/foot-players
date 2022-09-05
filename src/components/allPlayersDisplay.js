import './allPlayersDisplay.css'
import OnePlayerCard from "./onePlayerCard"
import { useState } from 'react'

const AllPlayersDisplay = ({playersList, getPlayers, positions}) => {
    const [filter, setFilter] = useState('')

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }
console.log('filter', filter)
    return (
<>
<h2>Liste des joueurs : </h2>
<div className="card-displayer">
<div>filtre : 
<label className="form-label" id="name">Position
        <select className="form-input"
            id="name"
            name="position"
            type="text"
            placeholder="position"
            value={filter} 
            onChange={handleFilter} >
{positions.map((pos, i)=> 
<option value={pos}>{pos}</option>)}
            </select>
        </label>
</div>

 {playersList.map((e,i)=> <OnePlayerCard data={e.player} _id={e._id} getPlayers={getPlayers} filter={filter} />)}
</div>
</>
    )
}

export default AllPlayersDisplay;
