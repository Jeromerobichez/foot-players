import './allPlayersDisplay.css'
import OnePlayerCard from "./onePlayerCard"
import { useState, useEffect } from 'react'

const initialFilter = {
    position: "",
    firstName: "",
    club: ""
}
const AllPlayersDisplay = ({playersList, getPlayers, positions}) => {
    const [filter, setFilter] = useState(initialFilter)
    const [sentFilter, setSentFilter] = useState({
        position: "",
        firstName: "",
        club: ""
    })
    const [filteredPlayersList, setFilteredPlayersList] = useState(null)

    useEffect(() => {
        setFilteredPlayersList(playersList) 
      
      }, []);
    const handleFilter = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFilter(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const resetFilters = () => {
        setFilter(initialFilter)
        setFilteredPlayersList(null) 
    }
    const showCollection = () => {
        setFilter(initialFilter)
        filteredPlayersList === null ? setFilteredPlayersList(playersList) : setFilteredPlayersList(null) 
        
    }
    let workableList = []
    const applyFilters = () => {
        
        workableList= filter.position !== "" ?(playersList.filter(player => player.player.position === filter.position)) : playersList

        workableList= filter.club !== "" ? (workableList.filter(player => player.player.clubs.includes(filter.club))) : workableList
        setFilteredPlayersList(workableList) 
    }

    return (
<>
<div>filtrer par position : 
<label className="form-label" id="name">
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
</div>
<div>filtrer par club : 
<label className="form-label" id="name">
        <input className="form-input"
            id="club"
            name="club"
            type="text"
            placeholder="club"
            value={filter.club} 
            onChange={handleFilter} />
        </label>
</div>
<button onClick={applyFilters}>Appliquer les filtres</button>
<div><button onClick={resetFilters}>Réinitialiser</button></div>
<div><button onClick={showCollection}>{ filteredPlayersList === null ? 'Afficher la collection' : 'Masquer la collection'}</button></div>


<div className="card-displayer">


 {filteredPlayersList !== null ?  filteredPlayersList.map((e,i)=> <OnePlayerCard data={e.player} _id={e._id} getPlayers={getPlayers} filter={sentFilter}  />) : null}
</div>
</>
    )
}

export default AllPlayersDisplay;
