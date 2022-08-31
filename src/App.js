
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/form';
import AllPlayersDisplay from './components/allPlayersDisplay';

function App() {
  const [playersList, setPlayersList] = useState('')
  const [error, setError]= useState('')

  useEffect(() => {
    axios
    .get('http://localhost:5000')
    .then(res => {
      setPlayersList(res.data)
    })
    .catch(e => {
      setError(`Erreur lors de la création : ${e.message}`)
      console.log(error)
    })
  
  }, []);
  return (
    <div className="App">
      <h1>Football players collection </h1>
      <AllPlayersDisplay playersList={playersList} />
      <Form />
     
    </div>
  );
}

export default App;
