import { useState } from 'react';
import './form.css'
import axios from 'axios';

const defaultPlayer = {
    lastName: "",
    firstName: "",
    birthDate: "",
    position: "",
    clubs: ""
}

const Form = ({getPlayers, positions})=> {
    const [player, setPlayer] = useState(defaultPlayer)
    const [message, setMessage] = useState("")
const handleChange =(e)=>{
    const { name, value } = e.target;
    setPlayer(prevState => ({
                ...prevState,
                [name]: value
            }));

}
const handleSubmit = (e) => {
    e.preventDefault()
    
    const playerToSend = player
    
    const clubsArray = player.clubs.split(',')
    playerToSend.clubs = clubsArray

    axios
      .post('http://localhost:5000/', {player})
      .then(res => {
        console.log(res.data)
        getPlayers()
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
        console.log(message)
      })
      setPlayer(defaultPlayer)
  }


    return(
        <form className="new-player-form">
          <h2>Formulaire de création d'un joueur :</h2>
        <label className="form-label" id="name">Nom
        <input className="form-input"
            id="name"
            name="lastName"
            type="text" 
            placeholder="nom" 
            value={player.lastName} 
            onChange={handleChange} />
        </label>
        <label className="form-label" id="name">Prenom
        <input className="form-input"
            id="name" 
            name="firstName"
            type="text"
            placeholder="prenom" 
            value={player.firstName} 
            onChange={handleChange} />
        </label>
        <label className="form-label" id="name">Date de naissance
        <input className="form-input"
            id="name"
            name="birthDate"
            type="text"
            placeholder="date de naissance" 
            value={player.birthDate} 
            onChange={handleChange}/>
        </label>
        <label className="form-label" id="name">Position
        <select className="form-input"
            id="name"
            name="position"
            type="text"
            placeholder="position"
            value={player.position} 
            onChange={handleChange} >
{positions.map((pos, i)=> 
<option value={pos} key={i}>{pos}</option>)}
            </select>
        </label>
        <label className="form-label" id="name">Clubs (séparés par une virgule)&nbsp;:
        <input className="form-input"
            id="name"
            name="clubs"
            type="text"
            placeholder="clubs"
            value={player.clubs} 
            onChange={handleChange} />
        </label>
        <button type="submit"
         onSubmit={handleSubmit}
         onClick={handleSubmit}>Envoyer</button>
      </form>

      )
}
export default Form;
