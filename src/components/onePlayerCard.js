import './onePlayerCard.css'
import axios from 'axios'
const OnePlayerCard = ({data, _id, getPlayers}) => {

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
