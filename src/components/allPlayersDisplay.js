import './allPlayersDisplay.css'
import OnePlayerCard from "./onePlayerCard"

const AllPlayersDisplay = ({playersList, getPlayers}) => {
console.log('playersList in display', playersList)
    return (
<>
<div>hello</div>
<div className="card-displayer">
{playersList.map((e,i)=> <OnePlayerCard data={e.player} _id={e._id} getPlayers={getPlayers} />)}
</div>
</>
    )
}

export default AllPlayersDisplay;
