import './onePlayerCard.css'
import axios from 'axios'

const OnePlayerCard = ({data, _id, getPlayers, filter}) => {
 
   console.log("data", data)

    const handleClick = (e) => {
      axios
      .post(`http://localhost:5000/delete`, {_id} )
      .then(res => {
        console.log(res.data)
        getPlayers()
      })
      .catch(e => {
       console.log(`Erreur lors de la suppression : ${e.message}`)
      })
    }

 return (
    <div className="player-card">
        <div>
         <div className='close-card'>
            <span className='close-card-span'
            onClick={handleClick}>X</span></div>
        <div className="player-card-lastName">nom : {data.lastName} </div>
        <div>prenom : {data.firstName} </div>
        </div>
        <div>{data.birthDate}</div>
        <div>{data.position}</div>
        <ul>
            Clubs : 
      {data.clubs.map((club, i)=> 
       <li className='player-li'
       key={i}>{club}</li>)} 
       </ul>

    </div>
 )
}
export default OnePlayerCard;
