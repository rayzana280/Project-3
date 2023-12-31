import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Biceps from './components/Biceps';

function App() {

  const[bicepsData, stateBicepsData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/")
    .then((res) => res.json())
    .then((data) => stateBicepsData(data))
  }, [])
  
  return (
    <div className="App">
      <Biceps data={bicepsData}/>
    </div>
  );
}

export default App;
