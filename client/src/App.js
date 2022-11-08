import logo from './logo.svg';
import './App.css';
import {useEffect, useState, useRef} from 'react';

function App() {
  const [status, setStatus] = useState('');
  const [list, setList] = useState([]);
  useEffect(() => {
    setStatus('Loading');
    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10')
      .then(response => response.json())
      .then(setList)
      .then(() => setStatus('Success'))
      .catch(() => setStatus('Error'));
  }, []);

  return (

    <div className="App">
      {status === 'Loading' && <div>Loading...</div>}
      {status === 'Error' && <div>There was an error</div>}
      {status === 'Success' && 
        <div>
          {JSON.stringify(list.cards)}
        </div>}
    </div>
  );
}

export default App;
