import OnePlayerCard from "./onePlayerCard"

const allPlayersDisplay = ({playersList}) => {
console.log('playersList in display', playersList)
    return (
<>
<div>hello</div>
{playersList.map((e,i)=> <OnePlayerCard data={e.player} />)}
</>
    )
}

export default allPlayersDisplay;
