import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import Reading from './components/Reading';
import Explain from './components/Explain';


function App() {
  const [status, setStatus] = useState('');
  const [list, setList] = useState([]);
  useEffect(() => {
    setStatus('Loading');
    fetch("http://localhost:9000/cards")
    .then((res) => res.json())
      .then((cards) => {
        const positions = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth']
        const reading = positions.map(function (e, i) {
          return {
            ...cards[i],
            position: e,
            flipped: false,
            isNext: i==0,
            lastClicked: false
          }

        });
        return reading;
      })
      .then(setList);
  }, []);

const cardExplanation = () => {
return list.find(o => o.lastClicked);

}

  const nextCard = () => {
    console.log("flipping")
  
    let nextIndex = list.map(object => object.isNext).indexOf(true);

    setList(current => current.map((obj, ind) => {

      if (ind === nextIndex) {
        return { ...obj, flipped: true, isNext: false, lastClicked: true };
      }
      if (ind === nextIndex+1) {
        return { ...obj, isNext: true };
      }
      return { ...obj, lastClicked: false };
    }));
    // setList(current => [...current, newToDo]);
  };

  return (

    <div className="App">
      {/* {JSON.stringify(cardExplanation())} */}
      <Reading cardList={list} nextCard={nextCard}/>
      <Explain explanation={cardExplanation()}/>
    </div>
  );
}

export default App;
