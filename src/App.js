
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
  .get('http://localhost:5000')
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
  
  }, []);

  const positions = [
    "gardien",
    "défenseur central",
    "défenseur latéral",
    "milieu défensif",
    "milieu offensif",
    "ailier",
    "attaquant"
 ]

  console.log('playersList in app', playersList)
  return (
    <div className="App">
      <h1>Football players collection </h1>
      <AllPlayersDisplay playersList={playersList} getPlayers={getPlayers} positions={positions} />
      <Form getPlayers={getPlayers} positions={positions} />
     
    </div>
  );
}

export default App;
