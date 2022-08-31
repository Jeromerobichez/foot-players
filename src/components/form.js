import { useState } from 'react';
import './form.css'
import axios from 'axios';

const Form = ()=> {
    const [player, setPlayer] = useState({
        lastName: "",
        firstName: "",
        birthDate: "",
        position: "",
        clubs: ""
    })
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
    setPlayer(prevState => ({
        ...prevState,
        clubs: player.clubs.split(',')
    }))
    axios
      .post('http://localhost:5000/', {player})
      .then(res => {
        console.log(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
        console.log(message)
      })
  }


    return(
        <form className="new-player-form">
        <label className="form-label" id="name">Nom
        <input className="form-input"
            id="name"
            name="lastName"
            type="text" 
            placeholder="nom" 
            onChange={handleChange} />
        </label>
        <label className="form-label" id="name">Prenom
        <input className="form-input"
            id="name" 
            name="firstName"
            type="text"
            placeholder="prenom" 
            onChange={handleChange} />
        </label>
        <label className="form-label" id="name">Date de naissance
        <input className="form-input"
            id="name"
            name="birthDate"
            type="text"
            placeholder="date de naissance" 
            onChange={handleChange}/>
        </label>
        <label className="form-label" id="name">Position
        <input className="form-input"
            id="name"
            name="position"
            type="text"
            placeholder="position"
            value={player.position} 
            onChange={handleChange} />
        </label>
        <label className="form-label" id="name">Clubs
        <input className="form-input"
            id="name"
            name="clubs"
            type="text"
            placeholder="clubs"
            onChange={handleChange} />
        </label>
        <button type="submit"
         onSubmit={handleSubmit}
         onClick={handleSubmit}>Envoyer</button>
      </form>

      )
}
export default Form;
