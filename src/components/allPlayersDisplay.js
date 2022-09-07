import './allPlayersDisplay.css'
import OnePlayerCard from "./onePlayerCard"
import { useState} from 'react'

const initialFilter = {
    position: "",
    firstName: "",
    club: ""
}
const AllPlayersDisplay = ({playersList, getPlayers, positions}) => {
    const [filter, setFilter] = useState(initialFilter) // intial filter to avoid the problem of undefined.map when the compo mounts
    const [filteredPlayersList, setFilteredPlayersList] = useState(null)

    console.log("ser",playersList)
// to collect the data to filter 
    const handleFilter = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFilter(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    // to clear all filters : 
    const resetFilters = () => {
        setFilter(initialFilter)
        setFilteredPlayersList(null) 
    }
// to display or hide the collection of cards
    const showCollection = () => {
        setFilter(initialFilter)
        filteredPlayersList === null ? setFilteredPlayersList(playersList) : setFilteredPlayersList(null) 
    }
   // to stock the filter in the state and modify the cards which are displayed
    const applyFilters = (e) => {
        e.preventDefault()
        let workableList = filter.position !== "" ?(playersList.filter(player => player.player.position === filter.position)) : playersList

        workableList= filter.club !== "" ? (workableList.filter(player => player.player.clubs.includes(filter.club))) : workableList
        setFilteredPlayersList(workableList) 
    }

    return (
<>

<form>
<label className="form-label" id="name">filtrer par position : 
        <select className="form-input"
            id="name"
            name="position"
            type="text"
            placeholder="position"
            value={filter.position} 
            onChange={handleFilter} >
{positions.map((pos, i)=> 
<option value={pos}>{pos}</option>)}
            </select>
        </label>
<label className="form-label" id="name">filtrer par club : 
        <input className="form-input"
            id="club"
            name="club"
            type="text"
            placeholder="club"
            value={filter.club} 
            onChange={handleFilter} />
        </label>
        <button onClick={applyFilters}
onSubmit={applyFilters}>Appliquer les filtres</button>
</form>
<div>
    <button onClick={resetFilters}>Réinitialiser</button>
    </div>
<div>
    <button onClick={showCollection}>{ filteredPlayersList === null ? 'Afficher la collection' : 'Masquer la collection'}</button>
    </div>
<div className="card-displayer">
 {filteredPlayersList !== null ?  filteredPlayersList.map((e,i)=>
  <OnePlayerCard data={e.player} _id={e._id} getPlayers={getPlayers}/>) : null}
</div>
</>
    )
}

export default AllPlayersDisplay;
