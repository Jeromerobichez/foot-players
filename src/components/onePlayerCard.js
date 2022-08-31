import './onePlayerCard.css'
const OnePlayerCard = ({data}) => {
    console.log('data.clubs', data.clubs)
 return (
    <div className="player-card">
        <div>
        <div>nom : {data.lastName} </div>
        <div>prenom : {data.firstName} </div>
        </div>
        <div>{data.birthDate}</div>
        <div>{data.position}</div>
        <ul>
            Clubs :
       {data.clubs.map((club, i)=> 
       <li>{club}</li>)}
       </ul>

    </div>
 )
}
export default OnePlayerCard;
