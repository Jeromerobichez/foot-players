import './allPlayersDisplay.css'
import OnePlayerCard from "./onePlayerCard"

const AllPlayersDisplay = ({playersList}) => {
console.log('playersList in display', playersList)
    return (
<>
<div>hello</div>
<div className="card-displayer">
{playersList.map((e,i)=> <OnePlayerCard data={e.player} />)}
</div>
</>
    )
}

export default AllPlayersDisplay;
