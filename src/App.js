
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/form';
import AllPlayersDisplay from './components/allPlayersDisplay';

function App() {
  const [playersList, setPlayersList] = useState([])
  const [error, setError]= useState('')

  const getPlayers = () => {
  axios
  .get('http://localhost:https://football-back.osc-fr1.scalingo.io/')
  .then(res => {
    setPlayersList(res.data)
  })
  .catch(e => {
    setError(`Erreur lors de la création : ${e.message}`)
    console.log(error)
  })
}
  useEffect(() => {
    getPlayers()
  },[]);

  const positions = [
    "",
    "gardien",
    "défenseur central",
    "défenseur latéral",
    "milieu défensif",
    "milieu offensif",
    "ailier",
    "attaquant"
 ]
  return (
    <div className="App">
      <h1>Football players collection </h1>
      <Form getPlayers={getPlayers} positions={positions} />
     
      <AllPlayersDisplay playersList={playersList} getPlayers={getPlayers} positions={positions} />
     
    </div>
  );
}

export default App;
